//grab DOM elements main div, button input

const change = document.getElementById('change');
const button = document.getElementById('button');
const input = document.getElementById('input');


//logs that, then calls coincounter(), then printIt().

//run the 'runIt' functionon click. 
button.addEventListener("click", runIt);  //("event", action)

function runIt() {
//it gets the value of var input (which starts out as 'null')
let amountInput = input.value;
//reset for input (otherwise previous input sticks)                                   
    input.value = "";
//logs start point              
    console.log("user input:", amountInput);
//calls coinCointer()                             
    coinCounter(amountInput);
//calls printIt()
    printIt(amountInput);                               
};


//and wrapping them in '<li>' tags
function printIt(amountInput) {

//this iterate through the object coins, gets the value, and puts each in the DOM 
  for ( let coin in coins) {

//by setting innerHTML of 'change' to a string containing the value of each coin (key),the name of each coin, 
    change.innerHTML += `<li> ${coins[coin]} ${coin} </li>`;
//log everything
    console.log('coin is:', coins[coin]);

  }; //end (for...in)

};//end print it


//creates an object to holt the coin values

let coins = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};


//this is where the change is actually made

function coinCounter(amountInput) {

//multiply by 100 to move the decimal
  let currentAmount = amountInput * 100;
//log that amount to make sense of things at this start point
      console.log('initial amount in pennies:', currentAmount);
//divide, by 25 and parseInt to get the whole number of quarters (remaining decimal value is passed on)
      coins.quarters = parseInt(currentAmount/25);
//log to check and see how this worked 'currentAmount is not re-assigned yet
      console.log('quarters:', coins.quarters);
//here we re-assign current to be what's left after we divide by 25
      currentAmount = currentAmount%25;
//log everything
      console.log('currentAmount after quarters:', currentAmount);

//rinse and repeat
      coins.dimes = parseInt(currentAmount/10);
      console.log('dimes:', coins.dimes);
      currentAmount = currentAmount%10;
      console.log('currentAmount after dimes:', currentAmount);
//nickels
      coins.nickels = parseInt(currentAmount/5);
      console.log('nickels:', coins.nickels);
      currentAmount = currentAmount%25;
      console.log('currentAmount after nickels:', currentAmount);
//pennies
      coins.pennies = parseInt(currentAmount/1);
      console.log('pennies:', coins.pennies);
//this is just a check for me to see it's got it all
      currentAmount = currentAmount%1;
      console.log('should be zero:', currentAmount);

}//end coinCounter.











