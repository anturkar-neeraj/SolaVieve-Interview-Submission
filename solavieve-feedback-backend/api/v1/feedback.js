const express = require("express");
const router = express.Router();
const FeedbackService = require("./feedback.service");

router.post('/', (req, res, next) => {
    FeedbackService.createFeedback(req).then((result) => {
        res.status(result.status).json(result);
    });
});



module.exports = router;