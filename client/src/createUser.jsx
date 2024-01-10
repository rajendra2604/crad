import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function createUsers( ){
    const[name,setNmae] =useState()
    const[email,setEmail] =useState()
    const[age,setAge] =useState()
    const navigate = useNavigate()
    const submite=(e)=> {
        e.preventDefault();
        axios.post("http://localhost:3001/createUsers",{name, email, age})
        .then(result =>{
            console.log(result)
            navigate('/users')
        })
        .catch(err=>console.log(err))

    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form  onSubmit={submite}>
                    <h2>Add user</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="enter name" className="form-control"
                    onChange={(e)=>setNmae(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="enter email" className="form-control"
                      onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="enter Age" className="form-control"
                      onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <button className=" btn btn-success">Submit</button>

            </form>
            
        </div>
        </div>
    )
}

export default createUsers;