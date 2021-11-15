import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../actions/sessionsActions'
import { useNavigate } from 'react-router'

const Login = () => {
  const [form, setForm] = useState({
    username:"",
    password:""
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(form, navigate))
  }


  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="username" onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" onChange={handleChange} />
        <button type="submit" placeholder="Login">Login</button>
      </form>
      
    </div>
  )
}

export default Login
