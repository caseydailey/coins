//grab DOM elements main div, button input

const change = document.getElementById('change');
const button = document.getElementById('button');
const input = document.getElementById('input');


//this function will run on click. 
//it gets the value of var input (which starts out as 'null')
//logs that, then calls coincounter(), then printIt().


function runIt() {
let amountInput = input.value;
    input.value = "";                                    //reset for input 
    console.log("user input:", amountInput);              //logs start point
    coinCounter(amountInput);                             //calls coinCointer()
    printIt(amountInput);                               //calls printIt()
};

function printIt(amountInput) {

  for ( let prop in coins) {

    change.innerHTML += `<li> ${coins[prop]} ${prop} </li>`;

  }; //end (for...in)

};//end print it



let coins = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};

function coinCounter(amountInput) {

  let currentAmount = amountInput * 100;

      console.log('initial amount in pennies:', currentAmount);
      coins.quarters = parseInt(currentAmount/25);
      console.log('quarters:', coins.quarters);
      currentAmount = currentAmount%25;
      console.log('currentAmount after quarters:', currentAmount);

      coins.dimes = parseInt(currentAmount/10);
      console.log('dimes:', coins.dimes);
      currentAmount = currentAmount%10;
      console.log('currentAmount after dimes:', currentAmount);

      coins.nickels = parseInt(currentAmount/5);
      console.log('nickels:', coins.nickels);
      currentAmount = currentAmount%25;
      console.log('currentAmount after nickels:', currentAmount);

      coins.pennies = parseInt(currentAmount/1);
      console.log('pennies:', coins.pennies);
      currentAmount = currentAmount%1;
      console.log('should be zero:', currentAmount);
}




button.addEventListener("click", runIt);  //("event", action)






