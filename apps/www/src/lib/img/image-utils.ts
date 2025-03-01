interface CompressionOptions {
    quality: number
    maxWidth: number
    maxHeight: number
    resizeMode: "fit" | "fill"
    format: "jpeg" | "webp" | "png"
    preserveMetadata: boolean
  }
  
  export async function compressImage(dataUrl: string, options: CompressionOptions): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
  
        if (!ctx) {
          reject(new Error("Could not get canvas context"))
          return
        }
  
        let { width, height } = img
        const aspectRatio = width / height
  
        // Resize image if needed
        if (width > options.maxWidth || height > options.maxHeight) {
          if (options.resizeMode === "fit") {
            if (width > options.maxWidth) {
              width = options.maxWidth
              height = width / aspectRatio
            }
            if (height > options.maxHeight) {
              height = options.maxHeight
              width = height * aspectRatio
            }
          } else {
            // 'fill' mode
            width = options.maxWidth
            height = options.maxHeight
          }
        }
  
        canvas.width = width
        canvas.height = height
  
        // Fill with white background for PNG transparency
        if (options.format === "jpeg") {
          ctx.fillStyle = "white"
          ctx.fillRect(0, 0, width, height)
        }
  
        // Draw image on canvas
        if (options.resizeMode === "fill") {
          const scale = Math.max(width / img.width, height / img.height)
          const x = (width - img.width * scale) / 2
          const y = (height - img.height * scale) / 2
          ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
        } else {
          ctx.drawImage(img, 0, 0, width, height)
        }
  
        // Convert to compressed data URL
        let mimeType
        switch (options.format) {
          case "webp":
            mimeType = "image/webp"
            break
          case "png":
            mimeType = "image/png"
            break
          case "jpeg":
          default:
            mimeType = "image/jpeg"
            break
        }
  
        const quality = options.quality / 100
        const compressedDataUrl = canvas.toDataURL(mimeType, quality)
  
        // TODO: Implement metadata preservation if needed
        // This would require a more complex solution, possibly using a library like exif-js
  
        resolve(compressedDataUrl)
      }
  
      img.onerror = () => {
        reject(new Error("Error loading image"))
      }
  
      img.src = dataUrl
    })
  }
  
  export async function convertImage(dataUrl: string, format: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
  
        if (!ctx) {
          reject(new Error("Could not get canvas context"))
          return
        }
  
        // Maintain original dimensions
        canvas.width = img.width
        canvas.height = img.height
  
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  
        // Convert to specified format
        let mimeType = "image/jpeg"
        switch (format) {
          case "png":
            mimeType = "image/png"
            break
          case "webp":
            mimeType = "image/webp"
            break
          case "jpeg":
          default:
            mimeType = "image/jpeg"
            break
        }
  
        // Convert to data URL with specified format
        const convertedDataUrl = canvas.toDataURL(mimeType, 0.9)
        resolve(convertedDataUrl)
      }
  
      img.onerror = () => {
        reject(new Error("Error loading image"))
      }
  
      img.src = dataUrl
    })
  }
  
  export async function convertSvgToPng(svgDataUrl: string, width: number, height: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
  
      img.onload = () => {
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
  
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          reject(new Error("Could not get canvas context"))
          return
        }
  
        // Fill with white background (for transparent SVGs)
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
  
        // Draw the SVG on the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  
        // Convert to PNG
        const pngDataUrl = canvas.toDataURL("image/png")
        resolve(pngDataUrl)
      }
  
      img.onerror = () => {
        reject(new Error("Error loading SVG image"))
      }
  
      img.src = svgDataUrl
    })
  }
  
  