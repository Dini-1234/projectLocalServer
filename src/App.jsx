import { useState, useContext } from 'react';
import './App.css'
import Login from './components/Login'
import Albums from './components/Albums'
import Home from './components/Home';
import { UserContext } from './components/context';
import Todos from './components/Todos'
import Posts from './components/Posts'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
const App = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div>hi! welcome!</div>
            <Albums></Albums>
            {/* {user ? <Home /> : <Login />} */}
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/tasks" element={<Todos />} />
                    {/* <Route path="/logout" element={<Logout />} /> */}
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
};
export default App
