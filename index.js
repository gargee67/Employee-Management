import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";


const app= express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const storage= multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null, 'public/images')
    },
    filename:(req, file,cb)=>{
        cb(null, file.fieldname+ "_"+ Date.now() + path.extname(file.originalname))
    }
});
const maxSize = 1 * 1000 * 1000; 
const upload= multer({
    storage: storage,

    limits: { fileSize: maxSize }, 
    fileFilter: function (req, file, cb){ 
    
        // Set the filetypes, it is optional 
        var filetypes = /jpeg|jpg|png/; 
        var mimetype = filetypes.test(file.mimetype); 
  
        var extname = filetypes.test(path.extname( 
                    file.originalname).toLowerCase()); 
        
        if (mimetype && extname) { 
            return cb(null, true); 
        } 
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes); 
      }  
  
// mypic is the name of file attribute 
})
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/employeestack").then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log("connection is broken");
});

const employeeSchema= new mongoose.Schema({
        fname:String,
        lname: String,
        email:String,
        dob:String,
        passs:String,
        pswrepeat:String,
        gender:String,
        id:String,
        file:String
}
);


const Eregister= new mongoose.model("Eregister",employeeSchema);

const employeeleaveSchema= new mongoose.Schema({
    subject:String,
    date:String,
    country:String,
    message:String,
    name:String,
    id:String,
    email:String,
}
);

const Eleave= new mongoose.model("Eleave",employeeleaveSchema);
/* Login logout time schema */
const employeeLogTimeSchema= new mongoose.Schema({
    date:String,
    time:String,
    etime:String,
    pcode:String,
    pname:String,
    hours:String,
    work:String,
    id:String,
}
);
const ElogTime= new mongoose.model("ElogTime", employeeLogTimeSchema);
/*end Login logout time schema */
app.post("/login",async (req,res)=>{
    //res.send("api login");
   
    const {email, passs}=req.body;
    const data={
        email:email,
        passs:passs
    }
    //console.log(email);
    //console.log(passs);
    try{
        const check= await Eregister.findOne({email:email})
        if(check)
        {

            if(passs===check.passs)
            {
                
                res.send({message:"login succesful", check:check});
            }else{
                res.send({message:"password is incorrect"});
            }
        }else{
            res.send({message:"user not register"});
        }
    }catch(e)
    {
        console.log(e);
    }
   
})
app.post("/timesheet", async(req,res)=>{
    console.log(req.body);
    const TimeSheet= new ElogTime({
        date:req.body.date,
        time:req.body.time,
        etime:req.body.etime,
        pcode:req.body.pcode,
        pname:req.body.pname,
        hours:req.body.hours,
        work:req.body.work,
        id:req.body.id,
    })
    const sheet=await TimeSheet.save();
    res.send({message:"ok your timesheet submitted"});
})
app.post("/leave",async(req,res)=>{
    console.log(req.body);
    const leave= new Eleave({
        subject: req.body.subject,
        date: req.body.date,
        country: req.body.country,
        message: req.body.message,
        name: req.body.name,
        id: req.body.id,
        email:req.body.email,
    })
    const createleave= await leave.save();
    res.send({message:"ok leave applied succesfully"});
})
app.get("/leave/:id",(req,res)=>{
    Eleave.find({id: req.params.id})
    .then(user1=>res.json(user1))
    .catch(err=>res.json(err))
})
app.get("/timesheet/:id",(req,res)=>{
    ElogTime.find({id: req.params.id})
    .then(user2=>res.json(user2))
    .catch(err=>res.json(err))
})
app.post("/register", upload.any(),async(req,res)=>{
    console.log("hhhhhhhhhhhhhhh");
  /*  upload(req,res,function(err) { 
  
        if(err) { 
  
            // ERROR occurred (here it can be occurred due 
            // to uploading image of size greater than 
            // 1MB or uploading different file type) 
            res.send(err) 
        } 
        else { 
  
            // SUCCESS, image successfully uploaded 
            console.log(req.file);
            res.send("Success, Image uploaded!") 
            
        } 
    }) */
    console.log(req.files);
    console.log("jjjjjjjjjjjjjjjjjj");
    console.log(req.body.fname);
    
    //console.log("l iove");
    console.log(req.body.email);
    var email=req.body.email;
    Eregister.findOne({email:email},async (err,user)=>{
        
        if(user)
        {
           res.send({message: "User already register"})
           
        }else{
            
            const user = new Eregister({
                fname: req.body.fname,
                lname: req.body.lname,
                email:req.body.email,
                dob:req.body.dob,
                passs:req.body.passs,
                pswrepeat:req.body.pswrepeat,
                gender:req.body.gender,
                id:req.body.id,
                file:req.files[0].filename,
            })
            console.log(user);
            //const token= await user.generate();
            const createuser= await user.save();
            res.send({message:"ok done created"})
        }
        
    })
})
app.listen(8000,()=>{
    console.log("your server is started ai 8000");
})
