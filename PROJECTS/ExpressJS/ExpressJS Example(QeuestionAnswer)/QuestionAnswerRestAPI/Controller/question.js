const getAllQuestions = (req,res,nest) => {
    res
        .status(200)
        .json({
            success : true
        })
}

module.exports = {
    getAllQuestions
}