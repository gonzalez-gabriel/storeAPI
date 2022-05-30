import React,{useState,useEffect} from 'react'
import axios from 'axios';  
import './Form.css'


const Form = ({update}) => {

  const [product,setProduct] = useState({
    name:'',
    price:'',
    image:'',
    description:'',
    category:''
  });

  const [openForm,setOpenForm] = useState(false)


  const submit = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost:5000/catalog', product)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).finally(()=>{
        update((prev)=>!prev)
        setOpenForm(false)})

  }

  const handleChange = (inputKey) =>(e) => {
    setProduct((prev)=>{
      return{...prev,[inputKey]: e.target.value}
    })
  }

  const openPostForm = () => {
    setOpenForm(false);
  };
  const closePostForm = () => {
    setOpenForm(true);
  };
  return (

    <div className="form">
      {openForm ? ( 
        <>
        <div className="modal">
          <div className="modal-content">
            <h1>New Product</h1>
            <form action="" className="postForm">
              <label htmlFor="name">
                Name:
                <input id="name" type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
              </label>
              <label htmlFor="price">
                Price:
                <input required id="price" type="number" min="0" name="price" placeholder="Price" onChange={handleChange('price')}/>
              </label>
              <label htmlFor="image">
                Image_url:
                <input required id="image" type="url" name="image" placeholder="Image_url" onChange={handleChange('image')}/>
              </label>
              <label htmlFor="category">
                Category:
                <input required id="category" type="text" name="category" placeholder="Category" onChange={handleChange('category')}/>
              </label>
              <label htmlFor="description">
                Description:
                <textarea required cols="25" rows="2" id="description" type="text" name="description" placeholder="Description" onChange={handleChange('description')}/>
              </label>
              <div className="formButtons">
                <button type="submit" className="formButton" onClick={submit}>CREATE PRODUCT</button>
                <button id="cancelButton" className="formButton" onClick={openPostForm}>CANCEL POST</button>
              </div>
            </form>
          </div>
        </div> 
        </>
        
      ) : (
        <div className="addButton">
          <button onClick={closePostForm}>ADD</button>
        </div>
      )
      }
    </div>
  )
}

export default Form