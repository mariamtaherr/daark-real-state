let x = [1, 2, 3, "mariam", true, [1, 2], { id: 0 }];
let y = { id: 1, name: "mariam" };

console.log(x[1]);
console.log(y.name);
console.log(x[6].id);
const education = "graduated";
const age = 18;

if (education == "graduated" && age == 22) {
  console.log("accepted");
} else {
  console.log("rejected");
}

switch ((education, age)) {
  case education == "graduated" && age == 22:
    console.log("accepted");
    break;
  default:
    console.log("rejected");
}
let m = ["mariam", "samir", "abdelsalam"];
for (i = 0; i < m.length; i++) {
  console.log(m[i]);
}
for (i = m.length - 1; i >= 0; i--) {
  console.log(m[i]);
}
i = 0;
while (i < m.length) {
  console.log(m[i]);
  i++;
}

//x = Number(prompt("enter ur first num"));
//y = Number(prompt("enter ur second num"));
//op = prompt("enter ur operator");
function mariam(x,y,op){
switch (op) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  default:
    console.error("invalid")}}
    mariam(1,2,"+");
if(age>=18){
  console.log("true")
}
if(age%2==0){
  console.log("even")
}else{
    console.log("odd")
}
if(age>=50){
    console.log("p")

}else{
    console.log("f")

}
var c=2;
while(i%2==0&&i>=20){
  console.log(i)
  i++;
}