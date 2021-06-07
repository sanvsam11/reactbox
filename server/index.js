const express = require('express')
const app = express()
const path = require('path')

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })
app.use(express.static(path.join(__dirname, "..","build")))
//app.use(express.static("public"))
app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
})
app.listen(5000, ()=>{
    console.log("server started on port 5000")
})