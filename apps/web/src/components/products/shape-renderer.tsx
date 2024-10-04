import { Dshapes } from "../../../../../packages/shapes/src/index";

const ShapeRenderer = ({ type, showNoise, index, size, name }) => {
  return (
    <>
      <Dshapes
        type={type}
        index={index}
        noise={showNoise}
        size={size}
        name={name}
      />
    </>
  );
};

export default ShapeRenderer;
