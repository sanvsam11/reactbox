const express = require('express')
const app = express()
const path = require('path')
app.get('/hello', (req, res)=>{
    res.send("Hello World")
})

const fs = require('fs')
const notesData = JSON.parse(fs.readFileSync('./Notes.json', 'utf-8'))
const firebase = require("firebase-admin");
const provider = new firebase.auth.GoogleAuthProvider()
firebase.auth().signInWithRedirect(provider)
firebase.auth().getRedirectResult().then((result)=>{
    const token = result.credential.accessToken
    const user = result.user
}).catch((error)=>{
    const errorCode = error.code
    const errorMessage = error.message

})
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