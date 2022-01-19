let display = document.getElementById("display");
let numbers = '';

function displaynum(num) {
  numbers += num;
  display.innerHTML = numbers;
}

function sumTotal() {
  if (numbers == '') {
    return 0
    numbers = '';
  }
  if (numbers == '%') {
    display.innerHTML = eval(numbers / 100);
  }
  document.getElementById("display").innerHTML = eval(numbers);
  numbers = '';
}

function cancel() {
  display.innerHTML = 0;
  numbers = '';
}
