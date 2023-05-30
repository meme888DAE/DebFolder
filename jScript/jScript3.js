
document.getElementsByClassName ('className')

var paragraph = document.getElementById("theOnlyParagraph");//Events Handlers
paragraph.onclick = function(){ // anonymous function 
 alert ( "You recently clicked on the paragraph ");
};

 

  // Set Time Out - runs only once 
   function runSale(){
      alert ("Inrease your learning power, join us everyday" );
  }
  setTimeout( runSale, 2000)

  // Set Interval 
  function runSale(){
      alert ("Increase your learning power, visit often " );
  
  }
  setInterval(runSale, 5000)