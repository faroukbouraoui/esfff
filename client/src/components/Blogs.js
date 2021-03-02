import Axios from 'axios'
import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../api/config'
import { getBlogs } from '../redux/actions/blogActions'
import Menu from './Menu'

 const Blogs = () =>  {

fetch('https://baitelmouna.com/98USQKJFN56RIVZV4ZX9FHHH1WA9T7AV')
.then((res) => res.json())
.then(console.log)
        return (
<div>
<Menu />

 </div>

        )
    }



export default Blogs
