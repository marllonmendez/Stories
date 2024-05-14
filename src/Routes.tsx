import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import SingUp from '@/pages/SingUp'
import Login from '@/pages/Login'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
