let x = ["a", "b", "d"];
let newx = x.map(function (y) {
  if (y == "d") {
    return "c";
  }else{
      return y;
  }
});
console.log(x);
console.log(newx);
