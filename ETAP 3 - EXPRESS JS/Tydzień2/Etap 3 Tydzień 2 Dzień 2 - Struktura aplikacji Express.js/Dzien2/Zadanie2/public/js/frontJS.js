const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

function setResult(text, color) {
    resultDiv.innerText = text;
    resultDiv.style.border = `4px solid ${color}`;
}

form.addEventListener('submit', async event => {
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);
    console.log(numberA);
    console.log(numberB);

    resultDiv.innerText = "Loading...."
    resultDiv.style.border = "none"

    const result = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({
            numberA,
            numberB
        }),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const data = await result.json();
    // console.log(data);

    // if (data.divider) {
    //     // resultDiv.innerText = 'Number B is devider of number A';
    //     // resultDiv.style.border="4px solid green";
    //     setResult("Number B is devider of number A", "green")
    //
    // } else {
    //     // resultDiv.innerText = 'Number B is NOT devider of number A';
    //     // resultDiv.style.border="4 px solid red";
    //     setResult("Number B is NOT devider of number A", "red")
    // }

    setResult(
        data.divider ? "Number B is devider of number A" : "Number B is NOT devider of number A",
        data.divider ? "green" : "red")
})