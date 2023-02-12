import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.listen('3040',()=>console.log("listening on port 3040"))

app.get('/',(req,res)=>{
    res.send('Hello world')
})