import React from 'react'
import { Route, Routes } from 'react-router'
import TestingMain from '../../TestingMain'
import Login from '../loginAndRegister/Login'
import Register from '../loginAndRegister/Register'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TestingMain/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default Path
