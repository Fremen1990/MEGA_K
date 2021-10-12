const express = require('express');
const cookieParser = require('cookie-parser');
const {appendFile, readFile} = require('fs');
const app = express();

app.use(express.static('public'));

let yes = 0;
let no = 0;
const ips = [];

app.get('/vote/yes', async (req, res) => {


    console.log(`check if incluides IP ${ips.includes(req.ip.toString())}`)

    // console.log(`check array: ${ips.includes(req.ip)}`)
    // console.log(typeof (req.ip))
    // console.log(req.ip)

    const ipi = req.ip;
    await ips.push(ipi)
    console.log(ips)
    yes++;
    console.log(`YES x ${yes}`)
    await res.send("Thank you for voting! ");

    await appendFile('data/ips.txt',JSON.stringify(ipi) , 'utf8',()=>console.log("saved!!"));
    // const savedFile = await readFile('data/ips.txt');
    // console.log(savedFile)
})

app.get('/vote/no', (req, res) => {
    no++;
    console.log(`NO x ${no}`)
    res.send("Thank you for not voting!")
})

app.get("/votes/check", (req, res) => {

    res.send(`Query results: YES ${yes} and NO ${no}`)
})


app.listen(3000, 'localhost');