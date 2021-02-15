import React, {  useEffect }  from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { baseUrl } from '../api/config';
import { getTemplates } from "../redux/actions/templateActions";
const FrontTemplates = () => {


    const dispatch = useDispatch ();
    const {templates} =useSelector(state => state.templates)
    
useEffect(() => {
dispatch(getTemplates());

  
}, [dispatch])



    return (
        <div>
<section className="o-hidden" data-bg-img="deco/images/pattern/01.png">
  <div className="container">
  <div className="row">
  <div className="col-lg-6 col-md-12 ml-auto mr-auto">
    <div className="section-title">
     
      <h2 className="title1" style={{left:"10vmin",paddingTop:"20px"}}>Nos templates et shops</h2> 
    </div>
  </div>
</div>


<div class="cards">
{templates.map((t)=>( 
<div className="row">

<div class="cardd">
<div className="portfolio-item">
<img className="img-center w-100" src={baseUrl+`/upload/${t.fileName}`} alt />
<div className="portfolio-title">
  <h4>{t.title}</h4>
</div>
 <a className="popup-link" href={t.link}>View</a> 

</div>
</div>


</div>
))}
</div>


      </div>
   
   
    

</section>

      
        </div>
    )
}

export default FrontTemplates


/**
 *     {templates.map((t)=>( 
      
      
      <div className= "col-lg-12 col-md-12">
        <div className="grid columns-3 row no-gutters popup-gallery" style={{position:"relative",height:"605px"}}>
        
      <div className="grid-sizer" />

          <div className="grid-item cat3">
            <div className="portfolio-item">
              <img className="img-center w-100" src={baseUrl+`/upload/${t.fileName}`} alt />
              <div className="portfolio-title">
                <h4>{t.title}</h4>
              </div>
               <a className="popup-link" href={t.link}>View</a> 
            </div>
          </div>
         
          </div>
          </div>
        ))}
       
 */