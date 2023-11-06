//hackerank problem
//factorial function declaration with one parameter that returns value
function fact(a){
  if (a>=1 && a<=5){
    return a * fact(a-1);
  }
  return 1;
}
