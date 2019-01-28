// // Game values
// let min = 1,
//     max = 10,
//     winningNum = getRandomNum(min, max),
//     guessesLeft = 3;

// UI Elements
const calc = document.querySelector('#calc'),
      hoursInput = document.querySelector('#hoursInput'),
      minsInput = document.querySelector('#minsInput'),
      secondsInput = document.querySelector('#secondsInput'),
      additiveHours = document.querySelector('#additiveHours'),
      additiveMins = document.querySelector('#additiveMins'),
      calcBtn = document.querySelector('#calcbtn'),
      message = document.querySelector('.message');
      
// // Assign UI min and max
// minNum.textContent = min;
// maxNum.textContent = max;

// // Play again event listener
// game.addEventListener('mousedown', function(e){
//   if(e.target.className === 'play-again'){
//     window.location.reload();
//   }
// });
      
// Listen for guess
calcBtn.addEventListener('click', function(){
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  today.setHours(hoursInput.value)
  today.setMinutes(minsInput.value)
  // today.setSeconds(secondsInput.value)
  console.log(today)
  console.log(parseInt(additiveHours.value)+" "+ parseInt(additiveMins.value))
  today.setHours(today.getHours() + parseInt(additiveHours.value), today.getMinutes() +  parseInt(additiveMins.value));
  console.log(today)
  
  // message.style.color = color;
  message.textContent = "You will be at: "+today.getHours()+":"+today.getMinutes();
  // console.log(hoursInput.value+":"+minsInput.value+":"+secondsInput.value+":"+additiveInput.value)

  // // let guess = parseInt(guessInput.value);
  
  // // Validate
  // if(isNaN(guess) || guess < min || guess > max){
  //   setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  // }

  // // Check if won
  // if(guess === winningNum){
  //   // Game over - won
  //   gameOver(true, `${winningNum} is correct, YOU WIN!`);

  // } else {
  //   // Wrong number
  //   guessesLeft -= 1;

  //   if(guessesLeft === 0){
  //     // Game over - lost
  //     gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
  //   } else {
  //     // Game continues - answer wrong

  //     // Change border color
  //     guessInput.style.borderColor = 'red';

  //     // Clear Input
  //     guessInput.value = '';

  //     // Tell user its the wrong number
  //     setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
  //   }
  // }
});

// // Game over
// function gameOver(won, msg){
//   let color;
//   won === true ? color = 'green' : color = 'red';

//   // Disable input
//   guessInput.disabled = true;
//   // Change border color
//   guessInput.style.borderColor = color;
//   // Set text color
//   message.style.color = color;
//   // Set message
//   setMessage(msg);

//   // PLay Again?
//   guessBtn.value = 'Play Again';
//   guessBtn.className += 'play-again';
// }

// // Get Winning Number
// function getRandomNum(min, max){
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// // Set message
// function setMessage(msg, color){
//   message.style.color = color;
//   message.textContent = msg;
// }