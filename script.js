//  - your Error here was that you were trying to be too complicated 
//  - it is good practice to write comments that explains you code for yourself and other developers
//  - you also used very bad naming conventions ,your function names and variable names MUST be clear and concise
//  - always plan yor work before writing a single line of code

// Step 1 : creat a function that is only responsible for getting the user input 
// Step 2 : create a function that is responsible for using that value returned from GetUserInput and changing the HTML
// Step 3 : Listen for the Click Event

// Listen for the click event and call the GetUserInput function
const submit = document.querySelector(".submit")
submit.addEventListener('click',GetUserInput)

// GetUserInput is responsible for retrieving the value entered by the user and passes 
// passes that value in as a argument of ReturnUsersDrink
function GetUserInput(){
  // get the vale the user inputed and convert it to uppercase
  const valueFromUser = document.querySelector(".input").value;
  valueFromUser.toUpperCase()
  // return the drink
  ReturnUsersDrink(valueFromUser);
}
// ReturnUsersDrink is responsible for recieving the value the user typed in as an Argument and returning the relevalt drink
// if a Users choice is invalid "Beer" will be returned
function ReturnUsersDrink(valueFromUser) {
  let drink;
  switch (valueFromUser) {
    case "JABRONI": 
      drink = "Patron Tequila";
      break;
    case "SCHOOL COUNSELOR":
      drink = "Anything with Alcohol";
      break;
    case "PROGRAMMER":
      drink = "Hipster craft beer";
      break;
    case "BIKE GANG MEMEBER":
      drink = "Moonshine";
      break;
    case "POLITICIAN":
      drink = "Your tax dollars";
      break;
    case "RAPPER":
      drink = "Cristal";
      break;
    default:
      drink = "Beer";
  }
  // select the User's Choice Div
  const outptDiv = document.querySelector("#users-choice");
  // change the html
  outptDiv.innerHTML = "Enjoy Your " + drink
}
