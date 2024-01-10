const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users.js')


const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Crud') 
 
app.get('/Users',(req, res)=> {
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}
)

 app.post("/authentication", (req, res) => {
    console.log('authentication started')
    let name = req.body.name;
    let password = req.body.password;
    if (name === 'raju' && password === 'raju') { 
        res.json("user is authenticated");

    } else {
        res.json("user does not have access");
    }
});
app.get('/getUser/:id', (req, res)  =>{
    const id =req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id', (req,res) => {
    const id =req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name, 
        email:req.body.email, 
        age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.delete('/deleteUser/:id', (req, res)=>{
    const id =req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => req.json(res))
    .catch(err => res.json(err))


})


app.post("/createUsers", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});





app.listen(3001,() => {
    console.log("server is running")
})