import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'


const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3000', "*"],
    credentials: true
}));

// let productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     price: Number,
//     description: String,
//     createdOn: { type: Date, default: Date.now }
// });
// export const productModel = mongoose.model('products', productSchema);

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
});
export const userModel = mongoose.model('users', userSchema);

app.get("/Loginuser", cors(), (req, res) => {

})

app.post("/Loginuser", async (req, res) => {
    const { email, password } = req.body
    try {
        const check = await userModel.findOne({ email: email })
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

app.post("/Signup", async (req, res) => {
    const { firstname,lastname, email,  } = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const data = {
        firstname: firstname,     
        lastname: lastname,     
        email: email,
        password: hashedPassword,
    }
    try {
        const check = await userModel.findOne({ email: email })
        if (check) {
            res.json('exist')  
        } else {
            res.json('Notexist')
            await userModel.create([data])
        }
    }   
    catch (e) {
        res.json('Notexist')
    }
})
 
app.use(bodyParser.json())
app.listen('3040', () => console.log("listening on port 3040"))

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