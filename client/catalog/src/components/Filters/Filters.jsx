import React from 'react'
import './Filters.css'

const Filters = ({startFilter,filters}) =>{

  const handleChange = (inputFilter)=>(e)=>{
    filters(prev=>{
      return {...prev, [inputFilter]: e.target.value}
    })
  }

  return(
    <div className="filters">
      <form className="filterForm" action="">
        <label htmlFor="name">
          <p>Name</p>
          <input id="name" type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
        </label>
        <label htmlFor="maxPrice">
          <p>Max Price:</p> 
          <input id="maxPrice" type="number" name="maxPrice" placeholder="Max Price" onChange={handleChange('maxPrice')}/>
        </label>
        <label htmlFor="minPrice">
          <p>Min Price:</p> 
          <input id="minPrice" type="number" name="minPrice" placeholder="Min Price" onChange={handleChange('minPrice')}/>
        </label>
        <label htmlFor="description">
          <p>Description:</p>
          <input id="description" type="text" name="description" placeholder="Description" onChange={handleChange('description')}/>
        </label>
        <label htmlFor="category">
          <p>Category:</p>
          <input id="category" type="text" name="category" placeholder="Category" onChange={handleChange('category')}/>
        </label>
      </form>
      <button onClick={()=>startFilter((prev)=>!prev)}>FILTER</button>
    </div>
  )
}

export default Filters