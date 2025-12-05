import React, { useEffect, useState } from 'react'
import "./updateUser.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'


const UpdateUser = () => {
    const users = {
        name: '',
        email: '',
        address: ''
    }

    const [user, setUser] = useState(users)
    const navigate = useNavigate();
    const { id } = useParams();

    
    const inputHandler = (e) =>{
        const {name, value } = e.target 
            console.log(name, value)
        setUser({...user, [name]: value })
    }

    useEffect( ()=> {
        axios.get(`http://localhost:8000/users/api/get/${id}`, )
        .then((response) =>{
            setUser(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    },[id])

    const submitForm = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/users/api/update/${id}`, user)
        .then((response) =>{
            toast.success(response.data.message,{position:'top-center'})
            navigate('/')
        }).catch((error) =>{
            console.log(error)
        })
    }

  return (
    <div className='UpdateUser'>
       <Link  to='/' type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> 
        Back
        </Link>
        <h3>Update User Form</h3>
        <form className='UpdateUserForm' onSubmit={submitForm}>
            <div className='FormsInputs'>
            <label htmlFor="name">Name:</label>
            <input 
            type="text"
            id='name'
            name='name'
            value={user.name}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your name'
            />
            </div>

            <div className='FormsInputs'>
            <label htmlFor="name">E-mail</label>
            <input 
            type="email"
            id='email'
            name='email'
            value={user.email}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your email'
            />
            </div>

            <div className='FormsInputs'>
            <label htmlFor="name">Address:</label>
            <input 
            type="text"
            id='address'
            name='address'
            value={user.address}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='Enter your address'
            />
            </div>
            <div className='FormsInputs'>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default UpdateUser;