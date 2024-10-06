import { Dshapes } from "../../../../../packages/shapes/src/index";

const ShapeRenderer = ({ type, showNoise, index, size }) => {
  return (
    <>
      <Dshapes
        className="cursor-pointer"
        type={type}
        index={index}
        noise={showNoise}
        size={size}
      />
    </>
  );
};

export default ShapeRenderer;
