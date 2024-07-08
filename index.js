const express =require("express");
const mongoose = require("mongoose");
const StudentModel = require("./StudentSchema/Schema");
const studentRoute=require("./controller/studentRoute");

const bodyParser = require('body-parser');
const cors =require("cors");

const app =express();
app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use(cors());
// const studentsRoute = require('./routes/students');
// const teachersRoute = require('./routes/teachers');
// const coursesRoute = require('./routes/courses');
// const marksRoute = require('./routes/marks');
// const attendanceRoute = require('./routes/attendance');

// app.use('/students', studentsRoute);
// app.use('/teachers', teachersRoute);
// app.use('/courses', coursesRoute);
// app.use('/marks', marksRoute);
// app.use('/attendance', attendanceRoute); 



mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://saiganesh:9392359162@cluster0.xxkq2mn.mongodb.net/auth-db")
var db=mongoose.connection;
db.on("open",()=>console.log("Connected"))
db.on("error",()=>console.log("Not Connected"))


app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    StudentModel.findOne({email:email})
    .then(u=>{
        if(u){
            if(u.password === password ){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
            
    })
})

app.post('/register',(req,res)=>{
 
    StudentModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err =>res.json(err))

})

app.use("/studentRoute",studentRoute);


app.listen(4000,()=>{
    console.log("Server is running in port 4000");
})