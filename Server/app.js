//Import all dependencies
const dotenv = require('dotenv');
const express =  require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const app = express();


//Config ENV file and Require connection file 

dotenv.config({path: './config.env'});

require('./db/conn');
const port =  process.env.PORT;

// Require Model 

const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');

//Method for get data and cookies from fronted
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Registration

app.post('/register', async (req, res)=>{
    try {
        //get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username,
            email,
            password
        });

        //Save Method is Used to Create User Or insert user
        //First hashing before insert user
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered")
        
    } catch (error) {
        res.status(400).send(error)

    }
})


// Login user

app.post('/login', async (req, res)=>{

    try {
        const email = req.body.email;
        const password = req.body.password;

        //Find user if exist

        const user = await Users.findOne({email});
        if(user){
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //Generate Token wich is define in user schema
                const token = await user.generateToken(); 
                res.cookie("jwt", token, {
                    // Expire Token in 24h 
                    expires : new Date(Date.now() + 86400000),
                    hhtpOnly : true
                })
                res.status(200).send("LoggendIn")
            }else{
                res.status(400).send("Invalid Credendital")
            }
        }else{
            res.status(400).send("Invalid Credendital")
        }

    } catch (error) {
        
        res.status(400).send(error)

    }

})


// MESSAGE

app.post('/message', async (req, res)=>{
    try {
        //get body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMessage = new Message({
            name,
            email,
            message
        });

        //Save Method is Used to Create a Message
        const created = await sendMessage.save();
        console.log(created);
        res.status(200).send("Sent")
        
    } catch (error) {
        res.status(400).send(error)

    }
})

// LOGOUT PAGE

app.get('/logout', (req, res) => {
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
})

//Run Server

app.listen(port, ()=> {
    console.log("Server is listening ")
})