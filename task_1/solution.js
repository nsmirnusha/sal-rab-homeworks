function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message;
    message = `${title} за ${price} теперь в корзине!`;
    console.log(message);

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {
    let newValue = oldValue

    // Задание №1.2. Увеличение количества в корзине
    let newValue = oldValue + 1;
    console.log(newValue);

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + delta;
    let newSumText = `${newSum} ₽`;
    console.log(newSumText);

    // Конец решения задания №1.3.

    return newSumText;
}

