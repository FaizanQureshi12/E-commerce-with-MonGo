import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import authApis from './Apis/auth.mjs'  
// import productApis from './Apis/product.mjs'


const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3000', "*"],
    credentials: true
}));    
  

//apis used for express router
app.use('/api/v1',authApis)  
// app.use('/api/v1',productApis)

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