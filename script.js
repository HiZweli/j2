
// ****Code wars Challenges****

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
const submit = document.querySelector(".submit")

submit.addEventListener('click', function(){
  const getInputs = () =>{
    const getOrder = document.querySelector(".input");
    const order = getOrder.value;
    const usersChoice = document.querySelector("#usersChoice");
    const choice = usersChoice.value;
    alert(order);
    return order;
    return choice;
  };

  const readyOrder = () => {
    getInputs()

    let drink;
   switch (drink) {
     case order === "JABRONI":
       drink = "Patron Tequila";
       break;
     case order === "SCHOOL COUNSELOR":
       drink = "Anything with Alcohol";
       break;
     case order === "PROGRAMMER":
       drink = "Hipster craft beer";
       break;
     case order === "BIKE GANG MEMEBER":
       drink = "Moonshine";
       break;
     case order === "POLITICIAN":
       drink = "Your tax dollars";
       break;
     case order === "RAPPER":
       drink = "Cristal";
       break;
     default:
       drink = "Beer";
   }

   return drink;
  };

 const returnOutput = () =>{
  const output = usersChoice === drink;
  return output;

 };

  returnOutput(readyOrder());
});


  // learn how to here : https://www.w3schools.com/jsref/met_document_queryselector.asp
  // get the element where the user's choice is shown ie:  document.querySelactor(#usersChoice)
  // declare an empty variable ie : let newCoice = null;

 // use switch case statement instaed of if else  : ie:

    // learn more about switch statement here : https://www.w3schools.com/js/js_switch.asp


  // change the value of the usersChoice html to the value of newChoice so the html changes when the user presses the button
  // learn how to here : https://www.w3schools.com/jsref/prop_html_innerhtml.asp
