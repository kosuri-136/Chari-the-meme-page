import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';

export const Store = createContext();

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
    <Store.Provider value={[ token, setToken ]}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/myprofile" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
    </Store.Provider>
    </div>
  );
};

export default App;
