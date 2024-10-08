const express = require("express")
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello node api')
})

app.listen(3000, ()=>{
    console.log('Node API is running on 3000')
})