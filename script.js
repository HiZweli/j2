
****Code wars Challenges****

/*
code for calculating which quater of the year does each month fall
under
 */

// const quaterOF = (month) =>{
//
//   const formula = 1/3*month;
//   const quater = Math.ceil(formula);
//
//   console.log(quater);
// };
//
// quaterOF(12);

/*
Another code wars Challenges that totally works!!
*/

function getDrinkByProfession(param ){ 

  const fix = param.toUpperCase();
  
  // learn how to here : https://www.w3schools.com/jsref/met_document_queryselector.asp
  // get the element where the user's choice is shown ie:  document.querySelactor(#usersChoice)
  // declare an empty variable ie : let newCoice = null;

 // use switch case statement instaed of if else  : ie: 
 /* 
    switch(param){
      case "JABRONI":
          // set newCoice = "Patron Tequila"
      default : 
          // set newCoice = "Beer"
    }
 
    learn more here : https://www.w3schools.com/js/js_switch.asp
 */
  if (fix === "JABRONI") {
    console.log("Patron Tequila");
    // set newCoice = "Patron Tequila"
  }else if (fix === "SCHOOL COUNSELOR") {
    console.log("Anything with Alcohol");
     // set newCoice = "Anything with Alcohol"
  }else if (fix === "PROGRAMMER") {
    console.log("Hipster Craft Beer");
     // set newCoice = "PROGRAMMER"
  }else if (fix === "BIKE GANG MEMBER") {
    console.log("Moonshine");
     // set newCoice = BIKE GANG MEMBER"
  }else if (fix === "POLITICIAN") {
    console.log("Your tax dollars");
     // set newCoice = "POLITICIAN"
  }else if (fix === "RAPPER") {
    console.log("Cristal");
     // set newCoice = "RAPPER"
  }else {
    console.log("Beer");
  }

  // change the value of the usersChoice html to the value of newChoice so the html changes when the user presses the button
  // learn how to here : https://www.w3schools.com/jsref/prop_html_innerhtml.asp

}