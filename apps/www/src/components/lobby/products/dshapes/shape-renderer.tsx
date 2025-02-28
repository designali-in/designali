// @ts-nocheck
import { Dshapes } from "../../../../../../../packages/shapes/src/index";

const ShapeRenderer = ({ type, showNoise, index, size }) => {
  return (
    <>
      <Dshapes
        className="cursor-pointer hover:animate-spin"
        type={type}
        index={index}
        noise={showNoise}
        size={size}
      />
    </>
  );
};

export default ShapeRenderer;
