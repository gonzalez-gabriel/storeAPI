import React from 'react'

const Filters = ({startFilter,filters}) =>{

  const handleChange = (inputFilter)=>(e)=>{
    filters(prev=>{
      return {...prev, [inputFilter]: e.target.value}
    })
  }

  return(
    <div>
      <h1>Filters</h1>
      <form action="">
        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
        </label>
        <label htmlFor="maxPrice">
          Max Price:
          <input id="maxPrice" type="text" name="maxPrice" placeholder="Max Price" onChange={handleChange('maxPrice')}/>
        </label>
        <label htmlFor="minPrice">
          Min Price:
          <input id="minPrice" type="text" name="minPrice" placeholder="Min Price" onChange={handleChange('minPrice')}/>
        </label>
        <label htmlFor="description">
          Description:
          <input id="description" type="text" name="description" placeholder="Description" onChange={handleChange('description')}/>
        </label>
        <label htmlFor="category">
          category:
          <input id="category" type="text" name="category" placeholder="Category" onChange={handleChange('category')}/>
        </label>
      </form>
      <button onClick={()=>startFilter((prev)=>!prev)}>Filtrar</button>
    </div>
  )
}

export default Filters