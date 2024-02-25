import React, { useState } from 'react'

const Search = ({setSearchTerm}) => {
    const[input,setInput] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        setSearchTerm(input)
        setInput("")
        if(input==""){
            setSearchTerm("")
        }
    
      }
  return (
    <div>
    <form className="d-flex" onSubmit={handleSubmit}>
    <input className="form-control me-2" type='text' placeholder="Search"  
    value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button className="btn text-light btnBackground" type="submit" >Search</button>
  </form>
    </div>
  )
}

export default Search
