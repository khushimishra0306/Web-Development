 let calculation=localStorage.getItem('calculation') || '';

display();

function updateCalculation(val){
  calculation+=val;
  display();
  localStorage.setItem('calculation',calculation);
}

function display(){
  document.querySelector('.js-result').innerHTML=calculation;
}