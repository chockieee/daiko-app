export const toCurrency = (price: number): string => {
  return `¥${price.toLocaleString()}`;
};
