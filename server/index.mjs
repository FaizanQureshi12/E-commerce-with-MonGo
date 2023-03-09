import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import path from 'path'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import authApis from './Apis/auth.mjs'  
// import productApis from './Apis/product.mjs'

const SECRET = process.env.SECRET || "topsecret";

const app = express()
env.config()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3000', "*"],
    credentials: true
}));

let productSchema = new mongoose.Schema({
    productTitle: { type: String },
    // ,required: true },
    category: { type: String },
    //, required: true },
    price: { type: Number },
    description: { type: String },
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
export const userModel = mongoose.model('users', userSchema)


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
    const { firstname, lastname, email, } = req.body
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

// app.use('/api/v1',authApis)  
// app.use('/api/v1',productApis)

app.post("/Addproduct", async (req, res) => {
    const productTitle = req.body.productTitle;
    const category = req.body.category;
    const price = req.body.price;
    const description = req.body.description;
    const product = new productModel({
        productTitle, category,
        price, description
    });
    try {
        await product.save()
        res.send("inserted data")
    } catch (error) {
        console.log(error)
    }
})

app.get("/read", async (req, res) => {
    productModel.find({},
        (err, result) => {
            if (err) {
                res.send(err)
            }
            res.send(result)
        }
    )
})

app.put("/update", async (req, res) => {
    const newProductTitle = req.body.newProductTitle;
    const id = req.body.id;
    try {
        await productModel.findById(id, (err, updatedProduct) => {
            updatedProduct.productTitle = newProductTitle
            updatedProduct.save()
            res.send('update')
        })
    } catch (err) {
        console.log(err)
    }
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    await productModel.findByIdAndRemove(id).exec()
    res.send('deleted')
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, '../build')))
app.use('*', express.static(path.join(__dirname, '../build')))

app.use(bodyParser.json())  
app.listen('3040', () => console.log("listening on port 3040"))

const mongodbURI = process.env.REACT_APP_MONGO_URL;
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