"use client";

import { Toolbar } from "@/src/comp/tools/toolbar";
import { useFabric } from "@/src/hooks/use-fabric";

export default function HomePage() {
  const {
    canvasRef,
    setBackgroundImage,
    addText,
    addChillGuy,
    flipImage,
    deleteSelectedObject,
    downloadCanvas,
    changeBackgroundColor,
    currentBackgroundColor,
  } = useFabric();
  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Meme</h1>
      </div>
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className=" w-full overflow-hidden rounded-3xl border "
        />
      </div>
      <div className="flex items-center  justify-center  py-10">
        <Toolbar
          setBackgroundImage={setBackgroundImage}
          addText={addText}
          addChillGuy={addChillGuy}
          flipImage={flipImage}
          deleteSelectedObject={deleteSelectedObject}
          downloadCanvas={downloadCanvas}
          changeBackgroundColor={changeBackgroundColor}
          currentBackgroundColor={currentBackgroundColor}
        />
      </div>
    </main>
  );
}
