
console.log("Я задагал число от 1 до 10. Попробуй отгадать его!");
let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);
let attempts = 3
while (attempts > 0) {
    let userNumber = Number(prompt("Введите число: "))
console.log(userNumber < secretNumber);
if (userNumber < secretNumber) {
    console.log("Секретное число больше");
    attempts = attempts - 1
    alert("У вас осталось 2 попытки!")
} else if(userNumber === secretNumber) {
    console.log("Вы угадали!");
    break;
} else{
    console.log("Секретное число меньше");
    attempts = attempts - 1
    alert("У вас осталось 1 попытка!")
}; 
}

