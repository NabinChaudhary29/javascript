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

// var string = "nabin chaudhary";

// var reverse = string.split("").reverse().join("");

// console.log(reverse);

// //usin for loop
// var stringvariable ="hello world";
// var reversestringforloop = "";
// for (i= stringvariable.length-1; i>=0; i--){
//     reversestringforloop = reversestringforloop + stringvariable[i];
//     console.log(reversestringforloop);
// }
// console.log(reversestringforloop);
// // sum of array element

// let arr = [1,2,3,4,5,6];
// let sum = 0;
// for (let i=0; i<arr.length; i++){
//     sum += arr[i];
//     // console.log(i);
// }
// console.log("sum is" + sum);

//while loop
//  var aray = [1,2,3,4,5];
//  var j = 0;
//  while(j<= aray.length){

//     sum = sum +aray[i];
//     j++;
//  }
//  console.log(sum);


// // palindrome

// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));


// // factor

// let n = 12;
// let i = 1;
// for (i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         console.log(i);
//     }
// }

// prime number

// number = 10;
// isprime = true;
// for (i=2 ; i<number; i++){
//     if(number % i ==0){
//         isprime = false;
//         break;
//     }
// }
// if (isprime){
//     console.log("prime number");
// }
// else{
//     console.log("not a prime");
// }

// largest number in array
// var largestarray = [100,300,40,60];
// var largestnumber = 0;
// for ( i =0; i<largestarray.length; i++){
//    if(largestnumber <largestarray[i]){
//     largestnumber = largestarray [i];
//    }
// }
// console.log(largestnumber);



//smallest number
// var largestarray = [100,300,40,60];
// var smallnumber = Number.MAX_VALUE;
// for ( i =0; i<largestarray.length; i++){
//    if(smallnumber >largestarray[i]){
//     smallnumber = largestarray [i];
//    }
// }
// console.log(smallnumber);


// factorial of number
// var factorialnumber = 5;
// fact=1;
// for (i= 1; i<=factorialnumber; i++){
//     fact = fact * i;
// }
// console.log(fact);


//counting volwes

// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }
// console.log(
//     "The Number of vowels in -" +
//         " A Computer Science Portal for Geeks:" +
//         getVowels(
//             "A Computer Science Portal for Geeks"
//         )
// );


//  let input = prompt("five me word")

//  let input = "milan is gandu and gay";
//  let volwel = "aeiou";
//  let count = 0;
//  for (i =0; i<input.length; i++){
//     for (j=0; j<volwel.length; j++){
//         if (input[i] == volwel[j]){
//             count++;
//         }
//     }
//  }
//  console.log(count);


// Remove duplicates from an Array

// var duplicate =[1,2,3,10,2,3,9,1,3,4,6,7,8];
// result = [];
// for(i=0; i<duplicate.length; i++){
//     if (result.indexOf(duplicate[i]) === -1){
//         result.push(duplicate[i]);
//     }
// }
// console.log(result);

//convert temp

// cel = prompt("emter temp in cel")
// cel = 0;
// feh = (9/5)*cel +32;
// console.log(feh);

// ///
// // feh =32;
// feh = prompt("emter temp in feh")
// cel= (feh-32)*5/9;
// // console.log(cel);
// alert(cel);


//  var array =[1,2,3,4,5,5];
//  console.log(array.includes(100));


//  var stringvar="hell world";
//  console.log(stringvar.toLocaleUpperCase().includes("world"));

//template literals

// let name ="nabin";
// let age =32;
// stringvariables = `${name} is ${age} yeras old`;
// console.log(stringvariables);

// function sum(a,b){
//     console.log(`sum is ${a+b}`);
// }
// sum(1,3);

// function celciusToFahr(temp){
//     fahre = (temp)*9/5+32;
//     return fahre;
// }
// let degree = celciusToFahr(0);

// console.log(degree);

// // Immediate Invoked Function


// (function() { 
//     console.log("test"); 
//     })();


//     // Function with Default Params


//     let multipy = (a= 1,b =13)=>{
//         return a*b;

//     };
//     console.log(multipy(4,5));
//     console.log(multipy());
//     console.log(multipy(4,7));
//     console.log(multipy());

// let isprime = (num)=>{
//     for ( i=2; i<num; i++ ){
//         if(num%i == 0){
//             return false;
//         }
//         return true;
//     }
// }

// let number = prompt("enter any number");
// let result = isprime(7);
// console.log(result);
// alert (result);


// const person = new Object(); 
// person.firstName = "John"; 
// person.lastName = "Doe"; 
// person.age = 30; 
// person.isMarried = false;

// console.log(person);
// const person = {
//     firstName:"John",
//     lastName: "Doe", 
//     age: 30, 
//     isMarried: false
// }; 
// console.log(person.age);

// const object = {
//     firstName:"John smith ",
//     lastName: "Doe", 
//     age: 30, 
//     isMarried: true,
//     fullSentence: function(){
//         return this.firstName + " " + this.lastName +" "+ this.age;
        
//     }
// };
// console.log(object.fullSentence());

// const object1 = { 
//     firstName: "John",
//     lastName: "Doe", 
//     age: 30, 
//     address: { 
//         street: "123 Main St", 
//         city: "New York", 
//         state: "NY" 
//     }
// }; 
    
//     console.log(object1.address.state);

//Print Numbers from 1 to n
//  function number(n) {

//     for (var i = 1; i <= n; i++) {        
//     console.log(i);
//     }
  
//   };
//   number(10);


  //Print all even Numbers 
// function even(n){
//     for (i=2; i<=n; i+=2){
//         console.log(i);

//     }
// } ;
// even(10);
//print all odd number

// function odd(n){
//   for (i=1; i<=n; i+=2){
//       console.log(i);

//   }
// } ;
// odd(100);

// sum of even number
sum = 0;
function even(n){
      for (i=2; i<=n; i+=2){
        sum = sum+i;
          // console.log(sum)
      }
      return sum;

  } ;
 var result= even(10);
 console.log(result);
