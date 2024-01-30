let a = 1;
console.log("Top Level");
console.log("A = " + a) 
//create block
{
    let b = 2;
    console.log("Inside block");
    console.log("Inside block",a);
    console.log("Inside block",b);
}
function greet(name){
    console.log("Welcome" + name)
}
let age = 20;
if (age >= 18){
    greet("Mateo");
}
for (let i = 0;i  < 5 ;i++){
    console.log("LOOP"+ i);
}
