
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

function getDrinkByProfession(param){

  const fix = param.toUpperCase();

  if (fix === "JABRONI") {
    console.log("Patron Tequila");
  }else if (fix === "SCHOOL COUNSELOR") {
    console.log("Anything with Alcohol");
  }else if (fix === "PROGRAMMER") {
    console.log("Hipster Craft Beer");
  }else if (fix === "BIKE GANG MEMBER") {
    console.log("Moonshine");
  }else if (fix === "POLITICIAN") {
    console.log("Your tax dollars");
  }else if (fix === "RAPPER") {
    console.log("Cristal");
  }else {
    console.log("Beer");
  }

}
