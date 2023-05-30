/* alerts */
alert ("This is your lucky day");

var paragraph = document.getElementById("theOnlyParagraph");//Events Handlers
paragraph.onclick = function(){ // anonymous function 
 alert ( "You recently clicked on the paragraph ");
};


// another example event handler above 
paragraph.addEventListener('click', myFunction,)

//Event Handler on the paragragh click on paragraph
   var paragraph = document.getElementById("theSecondParagraph");

   paragraph.onclick = function(){

   };

   // Event handler for onload event 
   
   paragraph.addEventListener('click, myFuntion,')

   // class name element 
   document.getElementsByClassName ('className')

   // Alert onload
              
   var paragraph = document.getElementById(" theSecondParagraph");
    paragraph.onload= function(){
         alert( "Thank you for clinking on the paragraph");
    };

    // Set Time Out - runs only once 
     function runSale(){
        alert ("You are getting more knowledge" );
    }
    setTimeout( runSale, 2000)

    // Set Interval 
    function runSale(){
        alert (" This is important information to know " );
    
    }
    setInterval(runSale, 5000)
        

        
