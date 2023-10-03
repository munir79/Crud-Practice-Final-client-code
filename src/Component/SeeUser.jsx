import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeUser = () => {
    const LoadUser=useLoaderData();
    const [Users,setUsers]=useState(LoadUser);
    const handleDelete=(_id)=>{
        console.log("deleting User:",_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("deleted information sucessfully");
                const remainingUser= Users.filter(user=>user._id !=_id);
                setUsers(remainingUser);
            }
        })
    }
    console.log(LoadUser);
    return (
        <div>
            {
                Users.map(user=><p key={user._id}> Name:{user.name}  Email:{user.email}  <button onClick={ ()=>handleDelete(user._id) }> X</button> </p>)
            }
        </div>
    );
};

export default SeeUser;