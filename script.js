console.log("Hello World");

// weird scope - dont use
//  x = 5;
// regular old variable
let y = 6;
y=10; //you can chan

const z = 7; // this is a constant. cant be changed  
// z=10 // this throws and error

console.log(y,z) 
console.log(y+z); 
console.log(y-z); 
console.log(y*z); 
console.log(y/z); 
console.log(y%z); //this does division but returns the remainder 
console.log(y**z); // exponents

let fname="adel"; // this is a string
let lname="matias";
console.log(fname + " " + lname);

console.log(`${ fname } ${ lname }`);
console.log(`${ fname } ${ 5*9 }`);
console.log( lname + 6 )


let user = "adel";
let pass = "foo";

if (user == "adel" && pass == "foo") {
    console.log('you are ' + user + ' sand your pass is ' + pass);
} else {
    console.warn("DENIED");
}

user = "adel";
if (user == "adel") {
    console.log('you are ' + user)
} else {
    console.error("DENIED")
}


const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 16;

function checkAge(myAge) {
    console.log('RUNNING...'+myAge);
if (myAge , license && myAge >= jrop) {
    console.log('you can have a JrOp license');
}

if (myAge >= license) {
    console.log('you can have a regular license');
}

if (myAge >= rental) {
    console.log("you can rent a car");
}

if (myAge < jrop) {
    console.log("you are too young to drive");
} }

checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);