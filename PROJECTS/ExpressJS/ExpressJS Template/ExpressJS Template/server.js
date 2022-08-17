const express = require("express");
const {accessControl,defaultMiddleware} = require("./middleware.js")
const app = express();
const port = 5000;
//app.use(accessControl)
const users = [
    {id:1, name:"Yunus Emre Topçu", place:"Istanbul"},
    {id:2, name:"Aleyna Kaya", place:"Trabzon"},
    {id:3, name:"Yağmur Alıcak", place:"Batman"}
]
const dataUsers = `
<h1> Hello USERS Page </h1>
    ${JSON.stringify(users)}
    <hr>
<a style="text-decoration: none; padding: 3px; border: 1px solid #3e3e3e; border-radius: 5px; background: rgba(145,145,145,.4); color: black;" class="btn" href="/">
Go to Home Page</a>
`;
app.use(express.json())

app.get('/', defaultMiddleware,(req,res) => {
    res.send(`
<h1> Hello my Page </h1>
<a style="text-decoration: none; padding: 3px; border: 1px solid #3e3e3e; border-radius: 5px; background: rgba(145,145,145,.4); color: black;" class="btn" href="/users">
Go to Users Page</a>
`)
})

// GET REQUEST
app.get("/users",accessControl,(req,res,next) => {
    res.send({
        success: true,
        data: dataUsers})
})

// POST REQUEST
app.post("/users", (req,res,next) => {
//    console.log(req.body)
    users.push(req.body)
    res.json({
        success: true,
        data: users
    })
})

// PUT REQUEST
app.put("/users/:id", (req,res,next) =>{
//    console.log(req.params.id)
    const id = parseInt(req.params.id)
    for (let i=0; i<users.length;i++) {
        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        success: true,
        data: users
    })
})

// DELETE REQUEST
app.delete("/users/:id", (req,res,next) => {
    const id = parseInt(req.params.id)
    for (let i=0; i<users.length;i++) {
        if (users[i].id === id) {
            users.splice(i,1)
        }
    }
    res.json({
        success: true,
        data: users
    })
})


app.listen(port, () => {
    console.log(`Server Started on PORT ${port}`)
})


