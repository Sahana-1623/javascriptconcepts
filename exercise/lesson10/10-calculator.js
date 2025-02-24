let calculation = localStorage.getItem('calculation') || '';
displayCalculations();

function updateCalculation(value) {
  calculation += value;
  displayCalculations();
  localStorage.setItem('calculation', calculation);
};

function displayCalculations() {
  document.querySelector('.js-display').innerHTML = calculation;
};