const express = require('express');
const cookieRouter = express.Router();

cookieRouter
    .post('/set', (req, res) => {
        const {name} = req.body;
        // console.log(req.body)

        res.cookie('name', name, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        })
            .send("Name saved.")
    })

    .get('/show', (req, res) => {
        console.log(req.cookies)

        const {name}=req.cookies

        res.send(name === undefined ? "No name" : name)
    })

.get('/check', (req, res)=>{
    const {name}= req.cookies;

    res.send(
        name===undefined? 'There is no name': 'Name is saved')
})


module.exports = {
    cookieRouter,
}

