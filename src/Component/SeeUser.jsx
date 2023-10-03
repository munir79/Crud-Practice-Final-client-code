import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SeeUser = () => {
    const LoadUser=useLoaderData();
    const handleDelete=(_id)=>{
        console.log("deleting User:",_id)
    }
    console.log(LoadUser);
    return (
        <div>
            {
                LoadUser.map(user=><p key={user._id}> Name:{user.name}  Email:{user.email}  <button onClick={ ()=>handleDelete(user._id) }> X</button> </p>)
            }
        </div>
    );
};

export default SeeUser;