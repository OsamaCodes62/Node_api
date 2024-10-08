const express = require("express")
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello node api, test')
})

app.listen(3000, ()=>{
    console.log('Node API is running on 3000')
})

app.listen(3001, ()=>{
    console.log("node API is not running")
})