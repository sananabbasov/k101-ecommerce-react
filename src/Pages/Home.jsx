import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/Product/ProductCard'

function Home() {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    await fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(data => setCategories(data))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      {
        categories.map((category, index) => (
            <ProductCard key={index} category_name={category} />
        ))
      }
    </div>
  )
}

export default Home