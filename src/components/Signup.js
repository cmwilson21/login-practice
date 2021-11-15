import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // signup(username, password);
    setUsername("");
    setPassword("");
    // navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button>Sign Up</button>
    </form>
  );
}
export default Signup;