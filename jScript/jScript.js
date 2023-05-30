/* All required expect alerts  */

var numberOfYears = 2000; // interger
var measurement = 1; // float
var myName = "Ms. Reynolds"; // string 

console.log (33+1);
console.log (numberOfYears);
console.log (measurement);
console.log ("My Name is " +myName);
console.log (numberOfYears + "---"+ measurement );
console.log (numberOfYears - measurement );
console.log (numberOfYears / measurement );
console.log (numberOfYears * measurement );

// If Statements 

if ( 12 > 30 ) {
   console.log ( "Yes, 30 is greater than 12, that condition is True");
} else {
   console.log ("No, that condition is False" );
}

// Else if and Else Else Statements 

var luckyNumber = 08;

if (luckyNumber > 13 ) {
       console.log ("Yes, number is greater than 13");
} else if ( luckyNumber < 13){
       console.log ( "No, number is not greater than 13");

} else {
       console.log ("Something went wrong, the number is neither greater than 13 nor less than 13");
}

// More If Statements 

var unluckyNumber = 20;

if (unluckyNumber == 20) {
       console.log (" Unlucky Number is equal to 20 ");

} else { 
       console.log ("Unlucky Number is not equal to 20");
}

// logical operators
// AND Logical Operator 

var gateFee = 15;
var ageLimit = 18;
var userAge =16; 
var userMoney = 13; 

if (userAge >= ageLimit && userMoney >= gateFee){
       console.log( "Welcome you passed the bar ");

       } else { 
           console.log (" Sorry, no entry");
       }

// Or Logical Operator 

var luckyNumber = 2;
var userNumber = 9;

if ( userNumber < luckyNumber || userNumber > luckyNumber) {
       console.log ("Greetings, you won");
} else {
       console.log (" Hip Hip Hoory - Congratulations!!");
}

// Not Logical Operator 
var luckyNumber = 9;
var userNumber = 22;

if ( userNumber != luckyNumber){
       console.log ("Better Luck Next Time");
   
} else {
       console.log (" You are a winner");
}

// tracking something to see if or not is true - Not Logical Operator 

var Fast = false; 
   console.log (!fast);


   // Use of an Array - while & for  loops - put in # 1 so it does not run infinitly
   while (1 <1) {
       console.log ("This condition is still true");
   }

   var userNumber = 1;

   while (1 < 10){
       console.log ("Still true"); 
       userNumber =userNumber + 1;
   }

   var userNumber = 1; 

   while (userNumber <10){
       console.log (userNumber);
       userNumber = userNumber +1;
   }

   var startPoint;
   for( startPoint= 1; startPoint < 5; startPoint++){
       console.log("Current value of startPoint is " + startPoint);
   }
// continue example
var startPoint;
   for ( startPoint= 1; startPoint < 5; startPoint++){
       if( startPoint ==5){
           continue;
       }
       console.log("Current value of startPoint is " + startPoint);
   }
   console.log("End of the entire");

 // break example
var startPoint;
for ( startPoint= 1; startPoint < 5; startPoint++){
    if( startPoint ==5){
        break;
    }
    console.log("Current value of startPoint is " + startPoint);
}
console.log("End of the entire");  

// simple functions 

function greet() {
       console.log ("Is this your first time");
   
}

// function with name 

function greet( name ){
       console.log("Welcome Back" + name);
}
// calling the function 

function greet( name ){
   console.log("Welcome Back" + name);
}
greet("Mary");
greet( "John");


// functions that return information 

function add( number1, number2) {
       var result = number1 +number2
       return result;
}
var answer = add (11, 11 );
   console.log (answer);

   // DOM 

   var mainContentDiv =document.getElementsById("mainContent")

   console.log("Node type:" +mainContentDiv.nodeType);
   console.log("Inner HTML:" +mainContentDiv.innerHTML);
   console.log("Child nodes:"+mainContentDiv.childNodes);

   // grabbing elements by tag name = Array ( list of different values)

   var allListItems = document.getElementsByTagName( "li");
   
       console.log (allListItems.childNodes);

   // tell us the inner html of the node which was grabbed 
   document.getElementById( "mainTitle")
       console.log(h2Node.innerHTML);

    // change elements and append 
    
     var newListItem = document.createElement("li");
     var entireUnorderedList =document.getElementById("mainSiteList");

     newListItem.innerHTML = "List 6";

   entireUnorderedList.appendChild( newListItem);
       console.log(entireUnorderedList.innerHTML)


       // creating a text node 

       var newListItem = document.createElement("li");
       var entireUnorderedList =document.getElementById("mainSiteList");
       var newListText = document.createTextNode("List item number 6");

       newListText.appendChild( newListText);

       entireUnorderedList.appendChild( newListItem);
       console.log(entireUnorderedList.innerHTML)

       