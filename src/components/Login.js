import React, {useState} from 'react'

const Login = () => {
  const [form, setForm] = useState({
    username:"",
    password:""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
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
