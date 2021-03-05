import Axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../api/config'
import { getBlogs } from '../redux/actions/blogActions'
import Menu from './Menu'

 const Blogs = () =>  {

  const [orders, setOrders] = useState([])

  useEffect(async() => {
    const response = await fetch("https://baitelmouna.com/api/orders?ws_key=FTJUNG6L3CLDXYLU9EIVWZHHSNV4JHGU&display=full&output_format=JSON")
     const data = await response.json()
     const item = data.orders;
     setOrders(item)   
  }, [])
  
console.log(orders)
        return (
<div>
<Menu />

 </div>

        )
    }



export default Blogs
