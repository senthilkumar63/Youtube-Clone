

const express =require('express')
const notes = require ('./data/notes.js')
const dotenv = require('dotenv')
const cors = require ('cors')
// const {test} = require('./controllers/authController')
const {mongoose} = require('mongoose')
const authRoutes = require('./routes/auth')
const passportSetup = require('./passport')
const passport = require('passport')
const session = require('express-session');
const cookieSession = require('cookie-session')

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401)
}

const app = express();
app.use(cookieSession({name:'session', keys:['youtube'], maxAge:24*60*60*100}))
app.use(session({secret: 'youtube', resave: false,
saveUninitialized: true,
cookie: { secure: true }}))
app.use(passport.initialize())
app.use(passport.session())
dotenv.config();
app.use(cors({origin:'http://localhost:3000',methods:'GET,POST,PUT,DELETE', credentials:true}));
app.use('/auth', authRoutes)
app.use(express.json())



mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch((err) => console.log("Databse not connected",err))

// app.use('/', require('./routes/authRoutes'))




// app.use('/api/users', userRoutes)

// app.get('/', (req, res) => {
//     res.send("Api is running")
// })
app.get('/api/notes', (req, res) =>{
    res.json(notes);
})
app.get('/api/notes/:videoId', (req,res) =>{
    const item = notes.find((n) => n.videoId === req.params.videoId);
    res.send(item)
})


// app.get('/', (req,res) =>{
//     res.send('<a href="/auth/google">Authenticate with google</a>')
// })
// app.get('/protected', isLoggedIn, (req,res) =>{
//     res.send(`Hi ${req.user.displayName}`)
// })
// app.get('/logout', (req, res) => {
//     req.logOut()
//     req.session.destroy()
//     req.send('Goodbye!')
// })
// app.get('/auth/google', 
//     passport.authenticate('google', {scope:['email', 'profile']}))

// app.get('/google/callback', passport.authenticate('google', {
//     successRedirect: '/protected',
//     failureRedirect: '/auth/failure'
// }))
// app.get('/auth/failure', (req,res) => {
//     res.send("Something went wrong")
// })


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server Started running"))
