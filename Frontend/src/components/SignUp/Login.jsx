import React from 'react'
import { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:'',
    role:''
  })

  const [loading,setLoading]=useState(false)
  const[message,setMessage]=useState('')

  const navigate=useNavigate();

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prev)=>({
      ...prev,[name]:value,
    }))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);

    try {
      const response=await axios.post('http://localhost:3000/api/user/login',formData);
      setMessage(response.data.message)
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("user",JSON.stringify(response.data.user))

      setTimeout(()=>{
        navigate('/')
      },1000)
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed")
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" 
        value={formData.email}
        onChange={handleChange}
        />
        <label>Password:</label>
        <input type="password" name="password" 
        value={formData.password}
        onChange={handleChange}
        />
         <label>Role:</label>
          <select value={formData.role} onChange={handleChange} name="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        <button type='submit' disabled={loading}>{loading?"logging in":"Login"}</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default Login
