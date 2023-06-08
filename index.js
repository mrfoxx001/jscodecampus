
  let btn = document.querySelector(".test_btn"); btn.onclick = function()
  {
      alert("hello i am the second test button on the page")
  }

//  VARIABLES
var test;   // variable declaration
test = 34;       //variable inititalization
var ay = "ayo ayodeji";   //both declaration and initialization

let myBro = "Mozillar 2022";
const age = 13;
let dob = "19/12/2009";




//   DATA TYPES AND DATA STRUCTURE

// string all about text

let name1 = "Mr. peter";
let name2 = 'Mr. foxx';
let name3 = `Hello I am ${name1}  - ${230 + 450}`; // template string
console.log(name3);

let accounBalance = 4568900;
let account = "98678";
let totalBalance = accounBalance + account; // concatenation
let totalBalance2 = accounBalance - account;// concatenation

console.log(typeof accounBalance);
console.log(typeof account);

console.log(totalBalance);
console.log(totalBalance2);

console.log(name1.toUpperCase() ); //convert to capital letters
console.log(name1.toLowerCase() ); // convert to small letter 

let myGuy = "     my name is peter, i am a fullstack and the autor of HOW stuff works in javascipt        ";

console.log(myGuy[0]);  // access the position of a character 
console.log(myGuy.length); //tell us the number of characters in myGuy

let numOfWords = myGuy.split(" "); //split the myGuy into substrains or words and return them as array 

console.log(numOfWords.length); //find the number of words in the myGuy


console.log(myGuy);

console.log(myGuy.trim()); // remove space from both the end and the begining

console.log(myGuy.trimEnd) // remove space at the end of the sentemce

console.log(myGuy.trimStart)  //

let conString = myGuy.concat("PHP", "Java", "Python");
console.log(conString);

let tester = "HP/LENOVO/HOST/DELL/MAC";
let numOfWord = tester.split("/");

// console.log(numOfWord.length);

let partTwo = tester.repeat(3)

console.log(partTwo);


console.log("*".repeat(6) )
console.log(tester.charAt(0));

console.log(tester.charCodeAt(0));

console.log(tester.includes("D"))

console.log(tester.indexOf("e"))

console.log(tester.substring())

console.log(tester.slice(0, tester.length - 1))

console.log(tester)



//numbers
let myNum = 45;
let xNum = "123.46789";


let convert = Number(xNum);
let convert2 = parseInt(xNum);
let xconvert3 = parseFloat(xNum);


console.log(xNum, convert, convert2, xconvert3)

let app = Number(xconvert3.toFixed(2));

console.log(app);

let xdiv = 23 / 0;
console.log(xdiv);




//undefined

let okro;
let ponmo = null;
console.log(typeof okro);

console.log(ponmo);


console.log(typeof ponmo);

//data structures

//1.array
//2object
//3.map
//4.set


//array:
let myarr = [
    "Mr christian",
    true,
    800,
    [1,3,4,5,3,1,1,0]
];


//reading from the array
console.log(myarr[0]);
console.log(myarr[3][1]);


//writing to the array

myarr[0] = 1998;

myarr[4] = "mr peter";

// console.log(myarr);


// push, unshift, shift,pop 
// slice, splice,length, indexOf,


let newpush = myarr.push(45)
myarr.push("Huwaii", "nigeria", "ghana", "cameroon",);

//adding items at the beginning of the array
myarr.unshift(900, "ohio", "sweden", "italy", "australia",);
console.log(newpush);

//remove elements from array
let removeditem = myarr.pop();
let shifteditem = myarr.shift();

console.log(removeditem, shifteditem);

//using the slice and splice
let firstcopy = myarr.slice(3, 9);
let firstcopy2 = myarr.slice(3, -3)
let firstcopy3 = myarr.slice(-3)
console.log(firstcopy, firstcopy2, firstcopy3);


let removeditems = myarr.splice(5, 3);

let items2add =["abuja", "ondo",2023]
let removeditems2 = myarr.splice(3, 3, ...items2add,)

console.log(removeditems2)
console.log(removeditems);

console.log(myarr)

let ohioIndex = myarr.indexOf("hio");

console.log(ohioIndex);

console.log(myarr);

let filteredNumbers = myarr.filter((item) => typeof item === "number");
console.log(filteredNumbers);



//foeach and the map 
myarr.forEach((item,index) => console.log(index, item));


myarr.map((item, index) => console.log(index, item));

let bagprice = [23000, 90000, 65000, 125000, 165000];

let sellingbag = bagprice.map((price) => 0.2*price + price);
console.log(sellingbag);

console.log(sellingbag.sort((a,b) => a - b))

















 
// let nigeriaStory = "Nigeria's elections have been marred by corruption and a lack of transparency. The country's judiciary system has also been criticized for being corrupt and ineffective,Many Nigerians feel that their voices are not being heard, and that the political system is rigged in favor of the ruling party. This has led to widespread protests and demonstrations,as people demand fair and transparent elections.Despite these challenges, there are also reasons for hope. Many young people are becoming more politically engaged, and they are using social media to hold their leaders accountable. There are also civil society organizations that are working to promote democracy and human rights.However, there is still a long way to go. Nigeria needs leaders who are committed to serving the people, and a judiciary system that is fair and impartial. Until these changes are made, the country will continue to struggle with corruption and political instability."





// console.log(nigeriaStory[0]);
// console.log(nigeriaStory.length);

// let numOfWrds = nigeriaStory.split(" ");

// // console.log(nigeriaStory);







