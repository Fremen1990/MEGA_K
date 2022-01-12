const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/:numA/:numB', (req, res) => {
    console.log(req.params)
    const {numA, numB} = req.params;

    const result = parseInt(numA) + parseInt(numB);

    res.send(`Your result is: ${result}`)
})


app.listen(3000, () => {
    console.log('server is running...')
});
