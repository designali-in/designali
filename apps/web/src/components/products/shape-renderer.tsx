import { Coolshape } from "dshapes";

const ShapeRenderer = ({ type, showNoise, index, size }) => {
  return (
    <>
      <Coolshape type={type} index={index} noise={showNoise} size={size} />
    </>
  );
};

export default ShapeRenderer;
