
// UI Elements
const calc = document.querySelector('#calc'),
      hoursInput = document.querySelector('#hoursInput'),
      minsInput = document.querySelector('#minsInput'),
      secondsInput = document.querySelector('#secondsInput'),
      additiveHours = document.querySelector('#additiveHours'),
      additiveMins = document.querySelector('#additiveMins'),
      calcBtn = document.querySelector('#calcbtn'),
      message = document.querySelector('.message');

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
});

