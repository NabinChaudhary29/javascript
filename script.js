// console.log("hello from console");
// alert("hello world")

//comment

/*

multi line comment


*/

// assigning a variable
// var name = "nabin";
// counter = 0;


//camel case

// firsttName = 10;

//pascal case

// Firstname = 1;

//sanke case
// first_name =1;

//kebab-case
// first-name-sds = 1;

// alert(Firstname);

// console.log (1 +1);
// console.log (12 *100);
// console.log (100/10);
// console.log (2 ** 5);
// console.log (105 % 5);

// increment_variable = 10;
// console .log(++increment_variable);
// console .log(increment_variable--);

// first_variable = 10;
// second_variable = 20;
// console .log(first_variable == second_variable);
// console .log(0 == false)

// number_var = 10;
// string_var = 'string " data';

// console .log(string_var);
// boolean_var = true;
// console .log(boolean_var);

// var empty_var;
// console .log( empty_var);



// var object = {
//     name: "nabin",
//     phone: "1290797"
// }

// console .log(object);


// array_number = [ 100, 300, 400];
// console .log(array_number[1]);

// array_string = ["apple", "g","n","m"];
// console .log(array_string);


// function sum( a , b ){
//     return  a+b;

// };
// console .log(sum);

// today = new Date();
// console .log(today);


// console .log(typeof today);

// string_variable = "apple";
// console .log(typeof string_variable);
// console .log(typeof object);
// console .log(typeof array_number);
// console .log(typeof increment_variable);
// console .log(typeof empty_var);

// console .log(Math.PI);

// console .log(Math.round(10.6));

// console .log (Math.pow(2,5));

// console .log (Math.sqrt(100));

// console .log (Math.ceil(10.5));

// console .log (Math.floor(10.5));

// console .log (Math.min(2,5,6,-1,-5));


// console .log (Math.random());


// var temp = 25;
// if(temp >=30){
//     alert("very high temp");
// }
// if(temp <30 && temp>=10){
//     alert("perfect");
// }




// var grade = 36;

// let grade = prompt('please enter a number');

// if (grade >=80){
//     alert("excellent you got A grade");
// }
// else if(grade>=60)
// {
//     alert("B garde");
// }
// else if (grade >=40){
//     alert("C garde");
// }
// else {
//     alert("so sad ypou are fail");
// }


// garde = "A";
// grade = prompt ("gave grade");

// switch (grade){
//     case "A":
//         alert ("you get dist");
//         break;
//         case"B":
//         alert ( "1st division");
//         break;
//         case"F":
//         alert("fail");
//         default:
//             alert("not garded");

// }

// var ternary = 10;
// var temporaryvariable = 0;
// if(ternary == 10){
//     temporaryvariable = ternary;
// }
// else {
//     if (ternary == 9){
//         temporaryvariable =90;
//     }
//     else {
//         temporaryvariable = 100;
//     }
// }
// console .log ("if:", temporaryvariable);

// temporaryvariable = 0;
// temporaryvariable =ternary == 10 ? ternary :ternary == 9 ? 90 :100;
// console .log ("ternary:", temporaryvariable);


// console.log("here");

// let variable = 10;
// try {
//     let variable = 10;
//     let vari = notdefined;
// } catch (error){
//     console.log(error);
    
// }finally{
//     console.log("finally");
// }
// console.log("after")


// for (i=0; i <10; i++){
//     console.log(i);
// }

// for (i=0; i <10; i++){
//     console.log("hello");
//     console.log("-----");
// }

// i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// i = 0;
// do{
// console.log("hello");
// // console.log("---")
// i++;

// }while(i<10);


// var object = {
//     name: "nabin",
//     phone: 6786235,
//     lastname:"chy",
// };
// for(let key in object){
//     console.log(key);
// }

// var array = [1,9,2,"aoo",4,5];
// for (let item of array){
//     console.log(item);
// }

// var stringvariable = "apple";
// for (let character of stringvariable){
//     console.log(character);
// }


// for (i=0; i<5; i++){
//     if (i==3){
//         break;
//     }
//     console.log(i);
// }
// for (i=0; i<5; i++){
//     if (i==3){
//         continue;
//     }
//     console.log(i);
// }


// let num = Number("12334");
// console.log(typeof num);


// stringvariable = "this is a string value";
// console.log(stringvariable);


// stringvariable = "this is a string value";
// console.log(stringvariable.length);

// console.log(stringvariable.indexOf("a"));

// let trim = "hello-,nabin,-chy";
// let split = trim.split("-")
// console.log(split);

// input string and reserve

var string = "nabin chaudhary";

var reverse = string.split(" ").reverse().join(" ");

console.log(reverse);

// sum of array element

let arr = [1,2,3,4,5,6];
let sum = 0;
for (let i=0; i<arr.length; i++){
    sum += arr[i];
    // console.log(i);
}
console.log("sum is" + sum);

// palindrome

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));


// factorial

let n = 12;
let i = 1;
for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}




