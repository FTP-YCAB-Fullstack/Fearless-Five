const express = require("express");
const app = express();
const mongoose = require('mongoose');
const http = require('http')
const cors = require('cors');
const {Server} = require('socket.io')
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const router = require('./routers/index')
const errorHandler = require('./middlewares/handleError')

const Message = require('./models/messageModel')

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

io.on('connection', socket => {
  
  socket.on('join', room => {
    socket.join(room)
    Message.find({room}).then(res => socket.emit('send_room_message', res))
  });

  socket.on('send', data => {
    Message.create(data).then(res => socket.to(data.room).emit('receive', data));
  })

})


server.listen(3001, () => console.log("server running"));
