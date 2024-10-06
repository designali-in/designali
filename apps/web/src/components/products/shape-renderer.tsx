import { Dshapes } from "../../../../../packages/shapes/src/index";

const ShapeRenderer = ({ type, showNoise, index, size }) => {
  return (
    <>
      <Dshapes
        className="animate-none cursor-pointer transition hover:animate-spin"
        type={type}
        index={index}
        noise={showNoise}
        size={size}
      />
    </>
  );
};

export default ShapeRenderer;
