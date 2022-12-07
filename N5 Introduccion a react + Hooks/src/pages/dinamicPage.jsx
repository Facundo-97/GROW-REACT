import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DinamicPage = () => {
  const [products, setProducts] = useState();

  let params = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const { category } = params
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      const data = await response.json();
      setProducts(data)
    }
    fetchApi();
  })


  return (
    <div>
      <h1>Pagina generada dinamicamente</h1>
      <h2>
        Category: {params.category}
      </h2>
      {
        products?.map(element => {
          return (
            <div key={element.id}>
              <h3>Title: {element.title}</h3>
              <h4>Price: {element.price}</h4>
              <img alt={element.description} src={element.image} />
            </div>
          )
        })
      }
    </div>
  )
}