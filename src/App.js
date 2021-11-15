import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {getCurrentUser} from './actions/sessionsActions';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentUser())
  // }, [dispatch])


  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <h1>hello</h1>
    </div>
  );
}

export default App;
