

const express =require('express')
const notes = require ('./data/notes.js')
const dotenv = require('dotenv')
const cors = require ('cors')
const {test} = require('./controllers/authController')
const {mongoose} = require('mongoose')
const userRoutes = require('./routes/userRoutes')

const app = express();
dotenv.config();
app.use(cors());
// app.use(express.json)



mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch((err) => console.log("Databse not connected",err))

app.use('/', require('./routes/authRoutes'))

app.use(express.json())


app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send("Api is running")
})
app.get('/api/notes', (req, res) =>{
    res.json(notes);
})
app.get('/api/notes/:videoId', (req,res) =>{
    const item = notes.find((n) => n.videoId === req.params.videoId);
    
    res.send(item)
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server Started running"))