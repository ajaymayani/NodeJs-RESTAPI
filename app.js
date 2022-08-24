const express = require('express');
require("./db/conn")
const studentRouter = require("./routers/studentRouter");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(studentRouter);
app.get('/', (req, res) => {
    res.send("this is home ")
})


app.listen(port, () => {
    console.log(`Running at port number ${port}`)
})