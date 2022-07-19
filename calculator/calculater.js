let a = parseInt(prompt("Enter your number"));
let b = parseInt(prompt("enter the number"));
let op=prompt("enter the operator");

switch(op){
    case '+':
        console.log("result",(a+b));
        break;
    case '-':
        console.log("result",(a-b));
        break;
    case '*':
        console.log("result",(a*b));
        break;
    case '/':
        console.log("result",(a/b));
        break;
    default:
        console.log("please give a number");

}