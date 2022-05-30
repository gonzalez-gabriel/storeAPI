import React,{useState,useEffect} from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import './CardList.css'
//import {getProductsFunction} from 'carpeta services'


const CardList = ({update, setUpdate, startFilter, filters}) => {

  const [products, setProducts] = useState([])
  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/catalog').then(res=>{
      setProductsFiltered(res.data.filter(product =>{
        return product.category.toLowerCase().includes(filters.category.toLowerCase()) 
              &&product.name.toLowerCase().includes(filters.name.toLowerCase())
              &&product.description.toLowerCase().includes(filters.description.toLowerCase())
              &&product.price > Number(filters.minPrice)
              &&(Number(filters.maxPrice)===0?true:product.price <= Number(filters.maxPrice))
      } ))
      setProducts(res.data)
      //NECESITO products ?
    })
    // setProductsFiltered(products.filter(product =>{
    //   return product.category.toLowerCase().includes(filters.category.toLowerCase()) 
    //         &&product.name.toLowerCase().includes(filters.name.toLowerCase())
    //         &&product.description.toLowerCase().includes(filters.description.toLowerCase())
    //         &&product.price > Number(filters.minPrice)
    //         &&(Number(filters.maxPrice)===0?true:product.price <= Number(filters.maxPrice))
    // } ))
    //setProducts(getProductsFunction)
  },[update,startFilter]) //AGREGO filters SI QUIERO ACTUALIZAR EN TIEMPO REAL
  return (
    <div className="card-list">
        {productsFiltered.map(product =><Card data={product} key={product._id} update={setUpdate}/>)}
    </div>
  )
}

export default CardList