const express = require("express");
const cors = require("cors");
const app = express();
const feedback = require('./api/v1/feedback');



app.use(cors());
app.use(express.json());
app.use('/api/v1/feedback', feedback);


app.listen(3000, () =>
    console.log('listening on port 3000!')
);