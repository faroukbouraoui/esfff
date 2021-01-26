import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../redux/actions/serviceActions";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const ServicesSingle = () => {

    const dispatch = useDispatch ();
    const {services} =useSelector(state => state.services)
    
useEffect(() => {
dispatch(getServices())
}, [dispatch])

    return (
 <div>
 <Navbar/>
 <section className="page-titlee o-hidden text-center grey-bg bg-contain animatedBackground"  data-bg-img="deco/images/pattern/05.png">
<div className="container">
<div className="row align-items-center">
<div class="col-md-12">
<h1 class="title">Nos Services</h1>

</div>
</div>
</div>
<div className="page-title-pattern"><img className="img-fluid" src="deco/images/bg/06.png" alt /></div>
</section>
<section>

    <div className="container">
    
      <div className="row">
      
      
          <Fragment>
          {services.map((s,i)=>(
              <div>
        <div className="col-sm-6">
          <div id="accordion" className="accordion style-1">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">
                  <a data-toggle="collapse" data-parent="#accordion" href={`#${i}`} aria-expanded="true" className><span />{s.serviceName}</a>
                </h6>
              </div>
              </div>
              </div>
              </div>
              <div className="col-sm-6">
              <div id={i} className="collapse show" data-parent="#accordion" >
                <div className="card-body" >{s.serviceDesc}</div>
              </div>
            
            </div>
            </div>
            ))}
            </Fragment>
           
            </div>
           
            </div>
            
  </section>
</div>

    )
}

export default ServicesSingle
