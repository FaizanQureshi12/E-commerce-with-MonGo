import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
// app.use(express.urlencoded({ extended: true }))


const app = express()
// const users = require("./mongo")
app.use(express.json())
app.use(cors())

let productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
    description: String,
    createdOn: { type: Date, default: Date.now }
});
export const productModel = mongoose.model('products', productSchema);

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
});
export const userModel = mongoose.model('users', userSchema);

const mongodbURI = process.env.mongodbURI || "mongodb+srv://faizan:asfan@cluster0.9ya8dik.mongodb.net/E-commerce?retryWrites=true&w=majority";
///////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

// ////////////////mongodb connected disconnected events/////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});
mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});
mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});
process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events////////////////////////
// const users = []

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         // console.log(hashedPassword)
//         const user = {
//             name: req.body.name,
//             password: hashedPassword
//         }
//         users.push(user)
//         res.status(201).send()
//         // hash( salt +'password') kjhjv
//     } catch (error) {
//         res.status(500).send()
//     }

// })

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     if (user == null) {
//         return res.status(400).send('Cannot find user')
//     }
//     try {
//         if (await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success')
//         } else {
//             res.send('Not Allowed')
//         }
//     } catch (error) {
//         res.status(500).send()

//     }
// })


app.get("/loginuser", cors(), (req, res) => {

})

app.post("/loginuser", async (req, res) => {
    const { email, password } = req.body
    try {
        const check = await users.findOne({ email: email })
        if (check) {
            res.json('exist')
        } else {
            res.json('Notexist')

        }
    }
    catch (e) {
        res.json('Notexist')
    }
})

app.post("/signup", async (req, res) => {
    const { email, password } = req.body
    const data = {
        email: email,
        password: password
    }
    try {
        const check = await users.findOne({ email: email })
        if (check) {
            res.json('exist')
        } else {
            res.json('Notexist')
            await users.insertMany([data])
        }
    }
    catch (e) {
        res.json('Notexist')
    }
})


app.use(bodyParser.json())
app.listen('3040', () => console.log("listening on port 3040"))