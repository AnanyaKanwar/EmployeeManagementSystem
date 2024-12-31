import React, { useContext, useEffect, useState } from 'react'
import Login  from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  // useEffect(()=>{
  //   // setLocalStorage();
  //   getLocalStorage();
  // },)


  const[user,setuser]=useState();
  const[loggedInUser,setLoggedInUserData]=useState(null);


  const authData=useContext(AuthContext)
  // console.log(authData?.employees)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     // console.log(loggedInUser)
  //     if(loggedInUser){
  //       setuser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  const handleLogin=(email,password)=>{
    if(email=="admin@gmail.com" && password=='123'){
      // console.log('This is admin');
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // console.log(user)
    }
    else if(authData){
      const employee=authData.employees.find((e)=>e.email==email && e.password==password)
      // console.log('This is user')
      if(employee){
        setuser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))

      }
      // console.log(user)
    }
    else{
      alert("Invalid Credentials")
    }

 
  }
  return (
    <>
    {!user?<Login handleLogin={handleLogin} />:""}

    {user=='admin'?<AdminDashboard/>:<EmployeeDashboard data={loggedInUser/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    
      
    </>
  )
}

export default App
