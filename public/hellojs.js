/*console.log("I'm in a JS file!");*/

//This is a single-line comment. Everything is ignored until the newline

/*
this is a multiline comment
I can keep typing words until
I reach the final star-slah
*/
/*var input;
if (input){
  console.log(input);
} else {
  console.log("It's not defined");
}
*/
/*
var test = false;
var output = test ? "Passed the test" : "Failed the test";
console.log(output);
*/
/*var value = 0;
if (value === 0) {
  console.log("zero");
} else if (value === 1) {
  console.log("one");
} else {
  console.log("or something else");
}
*/
/*var value = 0;
switch (value) {
  case 0:
  break;
  case 1:
  break;
  default:
  break;

}*/
/* var x = 0;
while (x < 10){
  console.log(x);
  x++;
} */
/*var a = 0;
while (true) {
  console.log(a);
  if (a >= 10) {
    break;
  } else {
    a++;
  }
}*/
/*for (var i = 0; i <= 10; i++) {
  console.log(i);
}*/
/*var arr = ["a", "b", "c", "d"];
arr.forEach(function(item){
  console.log(item);
}); naming function below */

/*function my_func_stmt(arg) {
  console.log("inside my function");
  console.log(arg);
}

var my_func_exp = function(arg) {
  console.log("inside my function");
  console.log(arg);
}*/

/*my_func_stmt("Hola");
my_func_exp("Hola");
*/
/*var one = function(){
  return 1;
}
console.log(one());*/
/*function addArgs(){
  console.log('printing args:', arguments);
}
addArgs(1,2,3,4);*/
/*function addArgs() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}
console.log(addArgs(3, 0.13, 0.01));*/

/*function times(number, block){
  for (i = 0; i < number; i++){
    block();
  }
}*/
/*console.log(a_var === undefined);
var a_var = 123;
/*console.log(func_var === undefined);*/

/*function a_function() {
  console.log(func_var === undefined);
  var func_var = "func";
}
a_function();*/


/*function hello1() {
  var my_own_var = "hellojs1";
  console.log(my_own_var);
}*/

function scope_func() {
  var my_own_var = "hellojs1";

  window.hello1 = function() {
    console.log(my_own_var);
  };
}
scope_func();
