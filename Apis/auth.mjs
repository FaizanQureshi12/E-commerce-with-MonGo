// import express from 'express'
// import bcrypt from 'bcrypt'
// import {userModel,
//     productModel
// } from './../dbRepo/models.mjs'


// const router = express.Router()

// router.get("/Loginuser", cors(), (req, res) => {

// })

// router.post("/Loginuser", async (req, res) => {
//     const { email, password } = req.body
//     try {
//         const check = await userModel.findOne({ email: email })
//         if (check) {
//             res.json('exist')
//         } else {
//             res.json('Notexist')
//         }
//     }
//     catch (e) {
//         res.json('Notexist')
//     }
// })   

// router.post("/Signup", async (req, res) => {
//     const { firstname,lastname, email,  } = req.body
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     const data = {
//         firstname: firstname,     
//         lastname: lastname,     
//         email: email,
//         password: hashedPassword,
//     }
//     try {
//         const check = await userModel.findOne({ email: email })
//         if (check) {
//             res.json('exist')  
//         } else {
//             res.json('Notexist')
//             await userModel.create([data])
//         }
//     }   
//     catch (e) {
//         res.json('Notexist')
//     }
// })
 
// export default router