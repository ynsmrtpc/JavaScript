const express = require("express")
const dotenv = require("dotenv")
// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
})
const PORT = process.env.PORT // Environments
const routers = require("./routers/index") // Routers
const connectDatabase = require("./helpers/database/connectDatabase") // Database
const customErrorHandler = require("./Middlewares/errors/customErrorHandler") // Error Handler
const app = express()

// Express Body Middleware
app.use(express.json())

app.listen(PORT, () => {
    console.log(`APP Started on ${PORT} : ${process.env.NODE_ENV}`)
})

// MongoDB Connection
connectDatabase();

// Routers Middleware
app.use("/api",routers)

// Error Handler
app.use(customErrorHandler)

// GET REQUEST
app.get("/", (req, res) => {
    res.send("Hello Question Answer API")
})

