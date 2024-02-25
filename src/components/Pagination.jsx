import React, { useState } from 'react'

const Pagination = ({setCurrentPage,currentPage,news}) => {
    const articlesPerPage = 5;    
    const handlePagination = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({top: 0,  behavior: 'smooth'});
      };
  return (
    <div>
    <div className='text-center p-3'>
    
    <button type="button" className="btn btn-primary readmore" style={{ width: '90px' }}
    onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span> Page {currentPage} </span>
    <button type="button" className="btn btn-primary readmore" style={{ width: '90px' }}
      onClick={() => handlePagination(currentPage + 1)}
      disabled={currentPage * articlesPerPage >= news.length}
    >
      Next
    </button>
  </div>
    </div>
  )
}

export default Pagination;



// import React, { useEffect, useState } from 'react'
// import "./pagination.css"

// const Pagination = () => {
//     const [products,setProducts]=useState([])
//     const [page,setPage]=useState(1)

//     const fetchData =async()=>{
//         const response = await fetch("https://dummyjson.com/products?limit=100")
//         const data = await response.json()
//         // console.log(data.products)
//         setProducts(data.products)
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])
//     const handleClick=(id)=>{
//         if(id>=1 && id <=products.length/10){
//             window.scrollTo({top: 0,  behavior: 'smooth'});
          
//             setPage(id)
//         }
        
        
//     }
    
    
//   return (
//     <div className='container'>
   
    
//       <div className='total_products'>
      
//       {products.slice(page*10-10,page*10).map((prod,id)=>
//         <span className='product' key={id}><img src={prod.thumbnail} alt={prod.title}/><h3 className='heading'>{prod.title}</h3></span>
//         )}
      
     
      
//       </div>
//       {products.length>0 && <span className='btns'>
//         <button className='btn' onClick={()=>handleClick(page-1)}>◀</button>
//         {[...Array(products.length/10)].map((_,i)=>
//         <button key={i+1} onClick={()=>handleClick(i+1)} className={page==i+1?"selectedButton":""}>{i+1}</button>)}
//          <button className='btn' onClick={()=>handleClick(page+1)}>▶</button>
         
       
        
//         </span>}
      
    
//     </div>
//   )
// }

// export default Pagination
