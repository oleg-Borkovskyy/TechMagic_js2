export const searchRickCount = () => {
  let searchRickCurrentValue = 0;
  return (str) => {
    return str.toLowerCase().includes("rick")
      ? ++searchRickCurrentValue
      : searchRickCurrentValue;
  };
};

let count = searchRickCount();

/*
// inner Lexical Environment
{}
// searchRickCount Lexical Environment
{ searchRickCurrentValue: 0, ()=>: fn }
// global Lexical Environment
{ searchRickCount: fn, count: fn, ... }
*/