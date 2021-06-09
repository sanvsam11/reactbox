const express = require('express')
const app = express()
const path = require('path')
app.get('/hello', (req, res)=>{
    res.send("Hello World")
})
// app.use(express.static(path.resolve(__dirname, '../client/build')))
// app.get('*', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })
app.use(express.static(path.join(__dirname, "..", "build")))
app.use(express.static("public"))
app.listen(5000, ()=>{
    console.log("started")
})