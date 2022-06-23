import React from "react";
import axios from "axios"
import UserList from "./UserList";
import { useState, useEffect } from "react";

export default function ShoppingList() {
  const [users, setUsers] = useState([])
  const userInfo= async ()=>{
    try{
await axios
.get("https://api.escuelajs.co/api/v1/users")
.then((response)=>setUsers(response.data))

}
catch(error){
  console.log(error)
};
  }

  useEffect(()=>{
 userInfo()
  }
,[])

 
  return <UserList usersInformation = {users}/>;
}
