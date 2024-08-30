export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split(".");
  // @ts-expect-error some issues with types
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : int; //12.1 => 12.10
};
