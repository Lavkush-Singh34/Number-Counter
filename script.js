let value = document.querySelector('#value');
let decreaseBtn = document.querySelector('#decrease');
let increaseBtn = document.querySelector('#increase');
let resetBtn = document.querySelector('button.ctrlBtns[type="reset"]');



let currentValue = 0;

resetBtn.addEventListener('click', function() {
    currentValue = 0;
    value.innerHTML = currentValue;
});


increaseBtn.addEventListener('click', function () {
    currentValue = increaseValue();
    value.innerHTML = currentValue;
});


function increaseValue(){
    return currentValue + 1
}

decreaseBtn.addEventListener('click', function(){
    currentValue = decreaseValue();
    value.innerHTML = currentValue;
})

function decreaseValue() {
    return currentValue - 1
;}