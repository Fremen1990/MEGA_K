function calc(operator, firstNumber, secondNumber) {

    let result = ''

    switch (operator) {
        case 'add':
        case 'plus':
            result = (firstNumber) + (secondNumber);
            break;
        case 'subtract':
        case 'minus':
            result = (firstNumber) - (secondNumber);
            break;
        case 'multiply':
            result = (firstNumber) * (secondNumber);
            break
        case 'divide':
            result = (firstNumber) / (secondNumber);
            break
        default:
            result= "Operation is not suppoerted :(";
    }
    // console.log(result)
    return result;

    // if (operator === 'add') {
    //     result = firstNumber + secondNumber;
    // }
    // if (operator === 'subtract') {
    //     result = firstNumber - secondNumber;
    // }
    // if (operator === 'multiply') {
    //     result = firstNumber * secondNumber;
    // }
    // if (operator === 'divide') {
    //     result = firstNumber / secondNumber;
    // }


}

module.exports = {calc};