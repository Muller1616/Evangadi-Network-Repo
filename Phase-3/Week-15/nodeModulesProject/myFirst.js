// Q1
// a,b
// console.log("My first module")

// c,d,e,f
const myMultiplier = (num) => {
  return 2 * num;
};
const val = myMultiplier(4);
console.log(val);

// ES module syntax syntax, with  type:module in package.json
// it supports import/export symtax
// suported .js with type:module and .mjs file extension
export default myMultiplier;

// common js syntax, with out type:module in package.json
// it supports require/module.exports syntax
// suported .js and .cjs file extension
// model.exports = { myMultiplier };



