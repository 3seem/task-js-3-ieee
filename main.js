// ###############################################
// task 1
// ###############################################
function sayhello(name,gen){
    if(gen==="Male")          console.log(`Hello Mr ${name}`);
    else if (gen==="Female")           console.log(`Hello Miss ${name}`);
    else                            console.log(`Hello ${name}`);
}
sayhello("Osama","Male");
sayhello("Eman","Female");
sayhello("Sameh");
// ###############################################
// task 2
// ###############################################
function calculate(firstnum,secondnum,oper){
    if(typeof secondnum==='undefined')           console.log(`Second Number Not Found`);
    else if (oper==="add")           console.log(`The sum of two nums is `+(firstnum+secondnum));
    else if(oper==="subtract")     console.log(`The subtract of two nums is `+(firstnum-secondnum));
    else if(oper==="multiply")     console.log(`The multiply of two nums is `+(firstnum*secondnum));
    else                           console.log(`The sum of two nums is `+(firstnum+secondnum));    
}
calculate(20); 
calculate(20, 30); 
calculate(20, 30, "add"); 
calculate(20, 30, "subtract"); 
calculate(20, 30, "multiply"); 
// ###############################################
// task 3
// ###############################################
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let x=numsAndStrings
.filter(item =>typeof item ==='number')
.map(num =>typeof num ==='number' ? -num : num);
console.log(x);
// ###############################################
// task 4
// ###############################################
let objMethodOne={
    property:"Method One"
};
console.log(objMethodOne.property);
let objMethodTwo =new Object();
objMethodTwo.property ="Method Two";
console.log(objMethodTwo.property)
let objMethodThree =Object.create(objMethodTwo);
objMethodThree.property ="Method Three";
console.log(objMethodThree.property);
// ###############################################
// task 5
// ###############################################
let a = 1;
let threeNums = { b: 2, c: 3, d: 4 };
let twoNums = { e: 5,f: 6 };
let finalObject = Object.assign({a},threeNums,twoNums);
console.log(finalObject);