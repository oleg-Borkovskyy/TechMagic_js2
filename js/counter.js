export const searchRickCount = () => {
  let searchRickCurrentValue = 0;
  return (str) => {
    return str.toLowerCase().includes("rick")
      ? ++searchRickCurrentValue
      : searchRickCurrentValue;
  };
};
