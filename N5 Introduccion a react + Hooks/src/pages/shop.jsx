import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom"

export const ShopPage = () => {
  const [menuItems, setMenuItems] = useState()

  let activeStyle = {
    textDecoration: "underline",
    color: 'red'
  };

  let activeClassName = "underline";


  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/categories`)
      const data = await response.json();
      setMenuItems(data)
    }
    fetchApi();
  }, [])
  return (
    <>
      <div>
        <ul>
          {menuItems?.map((li, index) => {
            return <li key={index}>
              <NavLink to={`${li}`} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{li}</NavLink>
            </li>
          })}
        </ul>
      </div>
      <Outlet />
      <footer>
        <p>Powered By Facundo Diaz</p>
      </footer>
    </>
  )
}
