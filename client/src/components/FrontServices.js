import React, { Component, useEffect } from "react";




import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { Link } from "react-router-dom";

const FrontServices = ()=> {
  
  
    const dispatch = useDispatch ();
    const {categories} =useSelector(state => state.categories)
    
useEffect(() => {
dispatch(getCategories());

  
}, [dispatch])
  

    return (
      <div>
      <section className="grey-bg pos-r text-center">
      <div style={{position:"absolute",left:"27%",top:"18%",WebkitTransform:"translateX(-50%) translateY(-50%);"}}>
        <img className="img-fluid rotateme" src="deco/images/pattern/03.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 ml-auto mr-auto">
            <div className="section-title">
              <h6>Service</h6>
              <h2 className="title">We’r Provided Best Digital Marketing Services!</h2> 
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((cat)=>(
          <div className="col-lg-4 col-md-6">
            <div className="featured-item text-center">
              <div className="featured-icon">
                <img className="img-center" src={`/upload/${cat.fileName}`} alt="" />
              </div>
              <div className="featured-title">
                <h5>{cat.category}</h5>
              </div>
              <div className="featured-desc">
                <p>{cat.description}</p>
              </div>
            </div>
          </div>
          ))}
          </div>
          </div>
          </section>
          </div>

    );
  }
export default FrontServices