import React from 'react'
import "./Register.css"
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [message,setMessage]=useState('');
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        role:'student',
        studentClass:'',
        rollNumber:'',
        department:'',
        subjects:''
    })

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prev)=>({
            ...prev,[name]:value
        }))
    }

    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post("http://localhost:3000/api/user/register",formData);
            setMessage(response.data.message);
            setTimeout(()=>{
                navigate('/login')
            },1000)
        } catch (error) {
            setMessage(error.response?.data?.message ||"Registration failed")
        }
    }
  return (
    <div className='register-form'>
  
        <h2>Registration</h2>
       <form onSubmit={handleSubmit}>
            <label>Name:
            <input type="text" name="name" 
            value={formData.name}
            onChange={handleChange}
            required />
            </label>
            
            <label>Email:
            <input type="email" name="email" 
             value={formData.email}
             onChange={handleChange}
            required />
            </label>
            <label>Password:
                <input type="password" name="password"
                 value={formData.password}
                 onChange={handleChange}
                required/>
            </label>
            <label>Role:
                <select name="role"  value={formData.role}
            onChange={handleChange}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
            </label>
            {formData.role==='student' &&(
                <>
                
                <label>
                    class:
                    <input type="text" name='studentClass' 
                     value={formData.class}
                     onChange={handleChange}
                    />
                </label>
                <label>RollNumber:
                    <input type="text" name="rollNumber" 
                     value={formData.rollNumber}
                     onChange={handleChange}
                    />
                </label>
                </>
            )}
               {formData.role==='teacher' &&(
                <>
                
                <label>
                    Department:
                    <input type="text" name='department' 
                     value={formData.department}
                     onChange={handleChange}
                    />
                </label>
                <label>Subject:
                    <input type="text" name="subjects" 
                     value={formData.subjects}
                     onChange={handleChange}
                    />
                </label>
                </>
            )}
         <button type='submit'>Register</button>
       </form>
       {message && <p className={`message ${message.toLowerCase().includes('failed') ? 'error' : ''}`}>{message}</p>}
 
    </div>
  )
}

export default Register
