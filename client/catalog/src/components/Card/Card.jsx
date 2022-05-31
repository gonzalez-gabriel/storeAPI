import axios from 'axios';
import React, { useState } from 'react';
import './Card.css';

const Card = ({ data, update }) => {
  const [openForm, setOpenForm] = useState(false);
  const [product, setProduct] = useState({
    name:data.name,
    price:data.price,
    image:data.image,
    description:data.description,
    category:data.category
  });

  const deleteCard = () => {
    axios
      .delete(`https://aenima-api-gabriel-gonzalez.herokuapp.com/catalog/${data._id}`)
      .finally(() => update((prev) => !prev));
  };

  const openEditForm = () => {
    setOpenForm(true);
  };
  const closeEditForm = () => {
    setOpenForm(false);
  };

  const updateCard = ()=>{
    axios
      .put(`https://aenima-api-gabriel-gonzalez.herokuapp.com/catalog/${data._id}`, product)
      .then(()=>closeEditForm())
      .finally(() => update((prev) => !prev));
  }

  const handleChange = (inputKey) => (e) => {
    setProduct((prev)=>{
      return{...prev,[inputKey]:e.target.value}
    })
  };
  return (
    <div className="card">
      {!openForm ? (
        <>
        <div className="card-content">
          <div className="card-image">
            <img src={data.image} onError={(event)=>event.target.src='https://coacademy-server-jc.com/uploads/courses/images/890.jpg'} alt="notFound" />
          </div>
          <div className="card-description">
            <h3>{data.name}</h3>
            <p>$ {data.price}</p>
            <p id="description-text">{data.description}</p>
          </div>
        </div>
          <div className="card-buttons">
            <button onClick={openEditForm} disabled={openForm}>EDIT</button>
            <button className="button-delete" onClick={deleteCard}>DELETE</button>
          </div>
        </>
      ) : (
        <div className="card-form">
          <h3>EDIT FORM</h3>
          <form action="">
            <label htmlFor="name">
              Name:
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange('name')}
                value={product.name }
              />
            </label>
            <label htmlFor="price">
              Price:
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Price"
                onChange={handleChange('price')}
                value={product.price}
              />
            </label>
            <label htmlFor="image">
              Image_url:
              <input
                id="image"
                type="text"
                name="image"
                placeholder="Image"
                onChange={handleChange('image')}
                value={product.image}
              />
            </label>
            <label htmlFor="category">
              Category:
              <select onChange={handleChange('category')} name="category" id="category">
                <option value="Calzado">CALZADO</option>
                <option value="Pantalon">PANTALON</option>
                <option value="Remeras">REMERA</option>
              </select>
            </label>
            <label htmlFor="description">
              Description:
              <textarea
                cols="25" 
                rows="2"
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange('description')}
                value={product.description}
              />
            </label>
          </form>
          <div className="card-buttons">
            <button onClick={updateCard} disabled={!openForm}>
              EDIT
            </button>
          </div>
            <button className="button-cancel" onClick={closeEditForm} disabled={!openForm}>
              X
            </button>
        </div>
      )}
    </div>
  );
};

export default Card;
