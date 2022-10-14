import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Watchlist from './components/Watchlist';
import { useState } from 'react';
import Signup from './components/Signup';
import Imdbsignin from './components/Imdbsignin';

const PrivateRoute = ({ user, children }) => {
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <Navbar />
      <div className="main-page">
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/watchlist' element={
            <PrivateRoute user={user}>
              <Watchlist user={user}/>
            </PrivateRoute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/imdbsignin' element={!user ? (<Imdbsignin user={user} setUser={setUser} />) : (<Navigate to="/" />)} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
