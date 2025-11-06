import { BrowserRouter, Routes, Route } from 'react-router';
import React from "react";
import { HomePage } from '../pages/HomePage.jsx';
import { Login } from '../pages/LoginPage.jsx';
import { Register} from '../pages/RegisterPage.jsx';
import { Navbar } from '../components/Navbar.jsx';
import { PrivateRoute } from './PrivateRouter.jsx';
import { PublicRoute } from './PublicRouter.jsx';

export const AppRouter = () => {
  return (
    <>
      <Navbar /> 
      
      <div className="container mt-4">
          <Routes>
              {/* rutas publicas */}
              <Route path="/login" element={
                  <PublicRoute>
                      <Login />
                  </PublicRoute>
              } />
              
              <Route path="/register" element={
                  <PublicRoute>
                      <Register />  
                  </PublicRoute>
              } />

              {/* ruta privada*/}
              <Route path="/home" element={
                  <PrivateRoute>
                      <HomePage />
                  </PrivateRoute>
              } />

              {/* Mmnejo de rutas no encontradas (redirigir al Home, que está protegido */}
              <Route path="/*" element={
                  <PrivateRoute>
                      <HomePage />
                  </PrivateRoute>
              } />
              
          </Routes>
      </div>
    </>
  )
}
