import React from 'react'
import Card from './components/Card'
import Products from './components/Products'
import Login from './components/Login'
import Register from './components/Register'
import { Home } from 'lucide-react'

const App = () => {

  

  return (
  <div className="parent">
  
   <Card />
   <Card />
   <Products />
   <Login />
   <Register />
   <Home />
 
   </div>
  )
}

export default App





