// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    // Hide results and Show loader
    alterVisibility('none', 'block');
    
    setTimeout(calculateResults, 2000);
  
    e.preventDefault();
  });
  
  // Calculate Results
  function calculateResults(){
    console.log('Calculating...');
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
  
    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

  /*
    isFinite(Infinity);  // false
    isFinite(NaN);       // false
    isFinite(-Infinity); // false

    isFinite(0);         // true
    isFinite(2e64);      // true
    isFinite(910);       // true
*/

/* .toFixed(2) -> Two decimal places */

    if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  
      // Show results and Hide loader
      alterVisibility('block', 'none');
  
    } else {
      showError('Please check your numbers');
    }
  }
  
  // Show Error
  function showError(error){

    // Hide results and Hide loader
    alterVisibility('none', 'none');
  
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }

  function alterVisibility(results, loader){
    // alter results
    document.getElementById('results').style.display = results;
    
    // alter loader
    document.getElementById('loading').style.display = loader;
  }