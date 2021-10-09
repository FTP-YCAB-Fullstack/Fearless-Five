const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const router = require('./routers/index')
const errorHandler = require('./middlewares/handleError')

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("server");
});

mongoose
.connect('mongodb+srv://admin_ihsan:123@cluster0.fjyzg.mongodb.net/remotify?retryWrites=true&w=majority')
.then(res => console.log('Connected to Db'))
.catch(err => console.log(err))

app.use(router)
app.use(errorHandler)

app.listen(3001, () => console.log("server running"));
