name = "MARIAM";
age = 20;
console.log(name);
console.warn(age);
const std = 10;
if (std > 3) {
  console.log("out");
} else {
  console.log("in");
}
//if
let budget=550;
if(budget=500){
  console.log("pizza");
} else if(budget=550){
  console.log("pizza and pepsi");
} else{
  console.log("pasta");
}
//switch
switch(budget) {
  case '500':
    console.log("pizza");
    break;
  case '550':
    console.log("pizza and pepsi");
    break;
  default:
    console.log("pasta");
}
//for
const students=["mariam-zain","mariam-samir","malak","malak","engy","reem","rawda","walaa","fatma","sondos","mayar"]
for(let index=0; index< students.length;index++){
        console.log("name of students:"+students[index]);

}
//while
let index=0
const student=["mariam-zain","mariam-samir","malak","malak","engy","reem","rawda","walaa","fatma","sondos","mayar"]

while(index<student.length){
            console.log(students[index]);
index++
}
//do while
