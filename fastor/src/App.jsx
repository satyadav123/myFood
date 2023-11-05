import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Register } from './LoginRegistePage/Register'
import { Login } from './LoginRegistePage/Login'
import { ListRetraurants } from './MainPage/listRestaurants'
import { Route, Routes } from 'react-router-dom'
import { MainProduct } from './MainPage/mainProduct'


export const App=() =>{
  

  return (
   <>
  
  
  
<Routes>
  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/mainpage' element={<ListRetraurants/>}/>


  <Route path='/mainproduct/:Id' element={<MainProduct/>}/>
</Routes>
   </>
  )}
