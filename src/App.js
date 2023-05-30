import './App.css';
import { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, NotFoundPage } from './components/shared';

import { PublicLayout, AuthLayout } from './components/layout';
import Home from './components/home';
import About from './components/about';
import Product from './components/Products';

import Login from './components/auth/login';
import Register from './components/auth/register';
import AuthProvider from './components/service/user';

function App() {

  const [num, setNum] = useState(1);

  const [string, setString] = useState('ad');


  useEffect(() => {
    setNum(num + 1)
  }, [string]);


  let number = 1

  function increment() {

    number = number + 1;
    setNum(num + 1)
  }

  function changeString() {
    setString('sdasd')
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* <Route path="/auth" element={<AuthLayout />}> */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          {/* </Route> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
