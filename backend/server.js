// const express = require('express');
// const app = express();
// const Registeruser = require('./model');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const middleware = require("./middleware");
// const cors = require('cors');


// mongoose.connect("mongodb+srv://kosuriravikanth:Mongo553136@cluster0.cvvip5o.mongodb.net/charipage", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true
// }).then(
//     ()=> console.log("DB Connection established")
// )

// app.use(cors());
// app.use(express.json());



// app.post("/signup", async (req, res) => {
//     try {   
//         const { username, email , password , confirmpassword} = req.body;
//         let exist = await Registeruser.findOne({email})
//         if (exist) {
//             return res.status(400).send("user already registered");
//         }
//         if(password !== confirmpassword) {
//          return res.status(400).send("password is not matching");   
//         }
//         let newUser = new Registeruser({
//             username,
//             email,
//             password,
//             confirmpassword
//         })
//         await newUser.save();
//         res.status(200).send("registration successfully")
//     }

//     catch (err) {
//         console.log("error: ", err)
//         return res.status(500).send("internal server error")
//     }
// });

// app.post("/signin" , async (req, res) => {
//     try { 
//         const {email,password} = req.body;
//         let exist = await Registeruser.findOne({email});
//         if (!exist) {
//             return res.status(400).send("user not found")
//         }
//         if(exist.password !== password) {
//             return res.status(400).send("Invalid Credentials")
//         }

//         let payload = {
//             user:{
//                 id : exist.id
//             }
//         }
//         // let key = "jwtkk";
//         jwt.sign( payload,'jwtkk' ,{expiresIn:3600000},
//             (err,token)=> {
//                 if(err) throw err;
//                 return res.json({token})
//             }
//             )
//         } 
//     catch(err) {
//         console.log(err)
//         return res.status(500).send("internal server error")
//     }
// })

// // app.get("/",(req, res) =>{
// //     res.send("hello world")
// // })


// app.get("/myprofile", middleware, async (req, res) =>{
//     try {
//         let exist = await Registeruser.findById(req.user.id);
//         if(!exist)
//         {
//            return res.status(404).send("user not found")
//         }
//         res.json(exist)
//  }
//     catch(err){
//         console.log(err);
//         return res.status(500).send("server error");
//     }
// })




// app.listen(6000,()=>{
//    console.log("server is listening 6000")
// });












const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');
const app = express();


mongoose.connect("mongodb+srv://kosuriravikanth:Mongo553136@cluster0.cvvip5o.mongodb.net/charipage", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex : true
}).then(
    () => console.log('DB Connection established')
)

app.use(express.json());

app.use(cors({origin:"*"}))

app.post('/signup',async (req, res) =>{
    try{
        const {username,email,password,confirmpassword} = req.body;
        let exist = await Registeruser.findOne({email})
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password !== confirmpassword){
            return  res.status(400).send('Passwords are not matching');
        }
        let newUser = new Registeruser({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save();
        res.status(200).send('Registered Successfully')

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internel Server Error')
    }
})

app.post('/signin',async (req, res) => {
    try{
        const {email,password} = req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist) {
             res.status(400).send('User Not Found');
        }
        if(exist.password !== password) {
             res.status(400).send('Invalid credentials');
           
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
          (err,token) =>{
              if (err) throw err;
              return res.json({token})
          }  
            )

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/myprofile',middleware,async(req, res)=>{
    try{
        let exist = await Registeruser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.listen(7000,()=>{
    console.log('Server running...')
})