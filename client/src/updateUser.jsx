import React from "react";
import axios from "axios";
import { useState ,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function updateUsers( ){
    const {id} = useParams()
    const[name,setNmae] =useState()
    const[email,setEmail] =useState()
    const[age,setAge] =useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=>{console.log(result.data)
            setNmae(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)            
        })
           .catch(err =>console.log(err))
         }, [] )

         const update = (e) => {
            e.preventDefault()
            axios.put("http://localhost:3001/updateUser/"+id,{name, email, age})
            .then(result =>{
                console.log(result)
                navigate('/users')
            })
            .catch(err=>console.log(err))
    
         }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={update}>
                    <h2>Add user</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="enter name" className="form-control"
                    value={name}   onChange={(e)=>setNmae(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="enter email" className="form-control"
                    value={email}   onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="enter Age" className="form-control"
                    value={age}   onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <button className=" btn btn-success">update</button>

            </form>
            
        </div>
        </div>
    )
}

export default updateUsers;