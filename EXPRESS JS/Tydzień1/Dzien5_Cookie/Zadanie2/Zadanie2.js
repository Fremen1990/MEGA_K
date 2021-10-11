const express = require('express');
const {readFile, writeFile, appendFile} = require('fs').promises;

const app = express();

app.get('/name/set/:name', async (req,res)=>{
const name = req.params.name;
await appendFile("names.txt", name, 'utf-8');
await appendFile("names.txt", "\n", 'utf-8');

res.send("Name added to the file");
console.log(name)
});

app.get('/name/show',  async (req,res)=>{
    const name = await readFile('names.txt', 'utf-8');
    res.send(name);
})

app.get('/name/check', async (req,res)=>{

    try {
        await readFile('name.txt');
        res.send("There is a name saved");
    } catch(e){
        res.send("There is no name saved! ")
    }


    if(name){
        res.send("There is a name saved");
    }else {
        res.send("There is no name saved! ")
    }
})


app.listen(3000);