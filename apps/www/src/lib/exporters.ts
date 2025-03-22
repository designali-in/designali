import * as THREE from "three";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

// Helper function to trigger download
function downloadBlob(blob: Blob, filename: string) {
  try {
    console.log(`Triggering download for ${filename}`, blob);

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Log after click to verify it happened
    console.log("Download link clicked");

    // Cleanup after a delay to ensure the download starts
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      console.log("Cleanup completed");
    }, 200);
  } catch (error) {
    console.error("Download error:", error);
  }
}

// Helper function to prepare model meshes for export
export function prepareModelForExport(model: THREE.Object3D): THREE.Object3D {
  // Clone the model to avoid modifying the original
  const clonedModel = model.clone();

  // Reset transformation to prevent any unexpected rotation/position
  clonedModel.position.set(0, 0, 0);
  clonedModel.rotation.set(0, 0, 0);
  clonedModel.scale.set(1, 1, 1);
  clonedModel.updateMatrixWorld(true);

  // Create clean materials for export to prevent visual artifacts
  const cleanMaterials = new Map<string, THREE.Material>();

  // Process all meshes to ensure proper export
  clonedModel.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      const mesh = object as THREE.Mesh;

      // Type assertion for material
      const material = mesh.material as THREE.Material;

      // Check if this mesh is a hole based on properties
      const isHole = Boolean(
        material.userData?.isHole ||
          mesh.userData?.isHole ||
          mesh.renderOrder > 0 ||
          (material as THREE.MeshPhysicalMaterial)?.polygonOffsetFactor < 0,
      );

      // Create a simplified clean material or reuse one we've already created
      const materialKey = isHole ? "hole" : material.uuid;

      if (!cleanMaterials.has(materialKey)) {
        const cleanMaterial = new THREE.MeshStandardMaterial({
          color: isHole
            ? 0x000000
            : (material as THREE.MeshPhysicalMaterial).color,
          roughness: (material as THREE.MeshPhysicalMaterial).roughness || 0.3,
          metalness: (material as THREE.MeshPhysicalMaterial).metalness || 0.5,
          side: THREE.FrontSide,
          // Apply different settings to hole materials
          transparent: isHole,
          opacity: isHole ? 0.5 : 1,
          depthWrite: !isHole,
          polygonOffset: true,
          polygonOffsetFactor: isHole ? -2 : 1,
          polygonOffsetUnits: 1,
        });

        cleanMaterial.userData.isHole = isHole;
        cleanMaterials.set(materialKey, cleanMaterial);
      }

      // Apply the clean material
      mesh.material = cleanMaterials.get(materialKey)!;

      // Store the hole status in the mesh's userData for later reference
      mesh.userData.isHole = isHole;

      // For better hole handling in exports, position hole meshes slightly
      // deeper than the main meshes to prevent z-fighting
      if (isHole) {
        // Apply a small z offset to hole meshes to ensure they properly
        // cut through the main shape without z-fighting
        const zOffset = 0.05;

        // Scale the hole slightly to ensure it fully penetrates the main shape
        const scaleUp = 1.01;
        mesh.scale.set(scaleUp, scaleUp, scaleUp + zOffset);

        // Update the matrix to apply these changes
        mesh.updateMatrix();
      }
    }
  });

  return clonedModel;
}

// Cleanup resources after export
export function cleanupExportedModel(model: THREE.Object3D): void {
  // Optional cleanup steps after export
  model.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      // Dispose of geometries and materials to prevent memory leaks
      if (object.geometry) {
        object.geometry.dispose();
      }

      if (Array.isArray(object.material)) {
        for (const material of object.material) {
          material.dispose();
        }
      } else if (object.material) {
        object.material.dispose();
      }
    }
  });
}

// Export to STL format
export async function exportToSTL(
  model: THREE.Object3D,
  fileName: string,
): Promise<boolean> {
  try {
    // Prepare the model for export
    const exportModel = prepareModelForExport(model);

    // Export with unified settings
    const exporter = new STLExporter();
    const result = exporter.parse(exportModel, {
      binary: true,
    });

    // Cleanup the model after export
    cleanupExportedModel(exportModel);

    // Create and trigger download
    const blob = new Blob([result], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    return true;
  } catch (error) {
    console.error("Error exporting to STL:", error);
    return false;
  }
}

// Export to GLTF/GLB format
export async function exportToGLTF(
  model: THREE.Object3D,
  fileName: string,
  format: "gltf" | "glb" = "glb",
): Promise<boolean> {
  try {
    // Prepare the model for export
    const exportModel = prepareModelForExport(model);

    // Create exporter with correct options
    const exporter = new GLTFExporter();
    const options = {
      binary: format === "glb",
      trs: true,
      onlyVisible: true,
    };

    // Export the model
    const gltfData = await new Promise<ArrayBuffer | object>((resolve) => {
      exporter.parse(
        exportModel,
        (result) => resolve(result),
        (error) => {
          console.error("GLTFExporter error:", error);
          throw error;
        },
        options,
      );
    });

    // Cleanup the model after export
    cleanupExportedModel(exportModel);

    // Create and trigger download
    let blob: Blob;
    if (format === "glb") {
      blob = new Blob([gltfData as ArrayBuffer], {
        type: "application/octet-stream",
      });
    } else {
      const jsonStr = JSON.stringify(gltfData, null, 2);
      blob = new Blob([jsonStr], { type: "application/json" });
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    return true;
  } catch (error) {
    console.error(`Error exporting to ${format.toUpperCase()}:`, error);
    return false;
  }
}
