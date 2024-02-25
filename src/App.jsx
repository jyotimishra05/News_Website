import React, { useState } from 'react'
import Card from './components/Navbar'
import Newsboard from './components/Newsboard'
import Navbar from './components/Navbar';
import "./components/style.css"

const App = () => {
  const [category, setCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  
  
  return (
   
   <div >
   
  <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm}/>

  
   <Newsboard category={category} searchTerm={searchTerm} />
   </div>
   
   
    
  )
}

export default App
