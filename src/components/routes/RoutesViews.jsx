import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RecetasPage from '../../pages/Ejej14/RecetasPage'
import FormularioPage from '../../pages/Ejej14/FormularioPage'
import NavbarComp from '../Ej14/NavbarComp'
const RoutesViews = () => {
  return (
    <>
    <NavbarComp />
    <Routes>
    
        
        <Route path='/recetas' element={<RecetasPage/>} />
        <Route path='/form' element={<FormularioPage/>} />
    </Routes>
    </>
  )
}

export default RoutesViews