const express = require('express');

const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res) => {
        // console.log(req.body)

        const {numberA, numberB} = req.body;

        // console.log("logB", numberB, "logA", numberA)

        // let answer;
        // if (numberA % numberB === 0) {
        //     answer={divider:true}
        // } else {
        //     answer= {divider: false}
        // }
        // res.json(answer)

        // const divider = numberA % numberB === 0;

        res.json({divider:numberA % numberB === 0})
    })

module.exports = {
    calcRouter,
}