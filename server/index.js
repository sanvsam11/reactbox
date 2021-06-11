const express = require('express')
const app = express()
const path = require('path')
app.get('/hello', (req, res)=>{
    res.send("Hello World")
})
var fs = require('fs')
const notesData = JSON.parse(fs.readFileSync('./Notes.json', 'utf-8'))
var firebase = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

// firebase.initializeApp({
//     credential: firebase.credential.applicationDefault(),
// //   credential: firebase.credential.cert(serviceAccount),
//    //databaseUrl: "https://noteapp-be38b.firebaseio.com"
// });
// const db = firebase.database()
app.get('/notesData', (req, res)=>{
    console.log(notesData)
    res.send(notesData)
})
app.use(express.static(path.join(__dirname, "..", "build")))
app.use(express.static("public"))
app.listen(5000, ()=>{
    console.log("started")
})