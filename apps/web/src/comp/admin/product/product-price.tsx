import { cn } from "@designali/ui";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const stringValue = value.toString();
  const [intValue, floatValue] = stringValue.includes(".")
    ? stringValue.split(".")
    : [stringValue, ""];
  return (
    <p className={cn("py-4 text-2xl", className)}>
      <span className="align-super text-xs">₹</span>
      {intValue}
      <span className="align-super text-xs">{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
