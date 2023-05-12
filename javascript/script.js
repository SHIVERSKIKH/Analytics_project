
const closeBtn = document.querySelector('.menu-list-close-btn');
const menuMobile = document.querySelector('.menu-mobile-list');
const span = document.querySelector('.span');
closeBtn.addEventListener('click', () => {
    menuMobile.style.display = 'none';
})

span.addEventListener('click', () => {
    menuMobile.style.display = 'flex';
    menuMobile.style.flexDirection = 'column';
    menuMobile.style.gap = '20px'
})

const inputs = document.querySelectorAll('.form-input');
const form = document.querySelector('form');
console.log(inputs);

form.addEventListener('input', (event) => {
  inputs.forEach((el) => {
    if(inputs[1].value === inputs[2].value) {
        inputs[1].style.borderColor = 'green';
        inputs[1].style.borderWidth = '2px';
        inputs[2].style.borderColor = 'green';
        inputs[2].style.borderWidth = '2px';
        event.preventDefault();
    }
    else {
        inputs[1].style.borderColor = 'red';
        inputs[1].style.borderWidth = '2px';
        inputs[2].style.borderColor = 'red';
        inputs[2].style.borderWidth = '2px';
    }
  })
})


  



