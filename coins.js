//grab DOM elements main div, button input

var change = document.getElementById('change');
var button = document.getElementById('button');
var input = document.getElementById('input');


//this function will run on click. 
//it gets the value of var input (which starts out as 'null')
//logs that, then calls coincounter(), then printIt().
//

function runIt() {
  var amountInput = input.value; 
  input.value = " ";                   //reset for input 
  console.log("user input:", amountInput);           //logs start point
  coinCounter(amountInput);           //calls coinCointer()
  printIt(amountInput);               //calls printIt()
};

button.addEventListener("click", runIt, false);

var coins = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};

function coinCounter(amountInput) {

//this only works if user inputs dollar amount i.e. '1.01'
//how to fix this?? if user enters plain integer 
//or number to thousanths 1.234?? i'm over trying to fix it right now.


//nonetheless, we declare a variable to keep track
//and put into it the integer value of the product of the input *100 
      var currentAmount = (amountInput * 100);
      console.log("as a whole number:",currentAmount);

  //now we make change. dividing first by 25 to get how many quarters
  //assigning this value to the "quarters" property of coins using . notation
      coins.quarters = Math.floor(currentAmount/25);
      console.log("quarters:", coins.quarters);
  //then current amount is given the leftovers by the modulos (remainder) operator
      currentAmount = Math.floor(currentAmount%25);
      console.log("afterquarters", currentAmount);
  //currentAmount after quarters is logged
      coins.dimes += Math.floor(currentAmount/10);
      console.log('dimes:', coins.dimes)
      currentAmount = Math.floor(currentAmount%10)
      console.log("after dimes:", currentAmount);
  //process is repeated here
      coins.nickels += Math.floor(currentAmount/5);
      console.log('nickels:', coins.nickels)
      currentAmount = Math.floor(currentAmount%5)
      console.log("after nickels:", currentAmount);
    //and here
      coins.pennies += Math.floor(currentAmount/1);
      console.log('pennies:', coins.pennies)
      currentAmount = Math.floor(currentAmount%1)
      console.log("should be zero:", currentAmount);
}

//super annoying because the math.floor means money is lost on big inputs
//but without it we have nonsense coin values...

function printIt(amountInput) {
  change.innerHTML = (

    `<ul>

    <li> $${amountInput} gets you: </li>
    <li> ${coins.quarters} Quarters,</li>
    <li> ${coins.dimes} Dimes,</li>
    <li> ${coins.nickels} Nickels,</li>
    <li> and ${coins.pennies} Pennies</li>

    </ul>`

  );

//really wanna do this cleaner... maybe for( var prop in coins) {...}?  

};







