import React,{useState,useEffect} from 'react'
import axios from 'axios';  


const Form = ({update}) => {

  const [product,setProduct] = useState({
    name:'',
    price:'',
    image:'',
    description:'',
    category:''
  });


  const submit = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost:5000/catalog', product)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).finally(()=>update((prev)=>!prev))

  }

  const handleChange = (inputKey) =>(e) => {
    setProduct((prev)=>{
      return{...prev,[inputKey]: e.target.value}
    })
  }
  return (
    <div>
      <form action="">
        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
        </label>
        <label htmlFor="price">
          Price:
          <input id="price" type="text" name="price" placeholder="Price" onChange={handleChange('price')}/>
        </label>
        <label htmlFor="description">
          Description:
          <input id="description" type="text" name="description" placeholder="Description" onChange={handleChange('description')}/>
        </label>
        <label htmlFor="image">
          image:
          <input id="image" type="text" name="image" placeholder="Image" onChange={handleChange('image')}/>
        </label>
        <label htmlFor="category">
          category:
          <input id="category" type="text" name="category" placeholder="Category" onChange={handleChange('category')}/>
        </label>
        <input type="submit" value="Create" onClick={submit}/>

      </form>
    </div>
  )
}

export default Form