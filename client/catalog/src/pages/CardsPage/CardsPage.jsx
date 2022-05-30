import React,{useState, useEffect} from 'react'
import CardList from '../../components/CardList/CardList'
import Form from '../../components/Form/Form'
import Filters from '../../components/Filters/Filters'

const CardsPage = (props) => {

  const [update, setUpdate] = useState(false)
  const [startFilter, setStartFilter] = useState(false)
  const [filters,setFilters] = useState({
    name:'',
    description:'',
    maxPrice:'',
    minPrice:'',
    category:'',
  })

  return (
    <div>
      <h1>PRODUCTS</h1>
      <Form update={setUpdate}/>
      <Filters startFilter={setStartFilter} filters={setFilters}/>
      <CardList update={update} setUpdate={setUpdate} startFilter={startFilter} filters={filters}/>

    </div>
  )
}

export default CardsPage