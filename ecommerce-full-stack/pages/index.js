import Products from '../components/Products'
import { useState, useEffect } from 'react'

import {useSelector} from 'react-redux'



export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // nos devuelve un estado
const store = useSelector(state => state)

  useEffect(() => {
    fetchProduct()
  },[])

  async function fetchProduct(){
      try {
        setLoading(true)
        setError(false)
        const res = await fetch('/api/products')
        const newProducts = await res.json()
        setProducts(newProducts)
      }catch (err) {
        setError(true)
      }
      setLoading(false)
  }

  if(error) {
    return <div>Error al cargar...</div>
  }

  if(loading) {
    return <div>Cargando...</div>
  }


  return (
    <>
      <Products data={products}/>
    </>
  )
}
