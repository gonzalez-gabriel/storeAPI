import React,{useState, useEffect} from 'react'
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
    if(product.name && product.price && product.image && product.description && product.category){
      axios
        .post('https://aenima-api-gabriel-gonzalez.herokuapp.com/catalog', product)
        .then(()=>setOpenForm(false))
        .finally(() => update((prev) => !prev));
    }else{
      alert('Todos los campos deben ser llenados')
    }

  }
  useEffect(()=>{
    setProduct({
      name:'',
      price:'',
      image:'',
      description:'',
      category:''
    })
  },[openForm])

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
            <form required className="postForm">
              <label htmlFor="name">
                Name:
                <input required id="name" type="text" name="name" placeholder="Name" onChange={handleChange('name')}/>
              </label>
              <label htmlFor="price">
                Price:
                <input required id="price" type="number" min="0" name="price" placeholder="Price" onChange={handleChange('price')}/>
              </label>
              <label htmlFor="image">
                Image_url:
                <input required id="image" type="text" name="image" placeholder="Image_url" onChange={handleChange('image')}/>
              </label>
              <label htmlFor="category">
              Category:
              <select onChange={handleChange('category')} name="category" id="category">
                <option value="">CATEGORIA</option>
                <option value="Calzado">CALZADO</option>
                <option value="Pantalon">PANTALON</option>
                <option value="Remeras">REMERA</option>
              </select>
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