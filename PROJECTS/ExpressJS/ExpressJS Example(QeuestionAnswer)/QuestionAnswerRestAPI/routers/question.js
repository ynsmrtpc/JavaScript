// ...api/question

const express = require("express")
const { getAllQuestions } = require("../Controller/question")
const router = express.Router()

router.get("/", getAllQuestions)

module.exports = router;