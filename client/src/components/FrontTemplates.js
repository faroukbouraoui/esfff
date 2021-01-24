import React, {  useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getTemplates } from "../redux/actions/templateActions";
const FrontTemplates = () => {


    const dispatch = useDispatch ();
    const {templates} =useSelector(state => state.templates)
    
useEffect(() => {
dispatch(getTemplates());

  
}, [dispatch])

    return (
        <div>
<section className="o-hidden" data-bg-img="images/pattern/01.png">
  <div className="container">
    <div className="row align-items-end">
      <div className="col-lg-5 col-md-12">
        <div className="section-title">
          <h2 className="title">Let’s Check some Work here</h2>
        </div>
      </div>
      <div className="col-lg-7 col-md-12 text-md-right">
        <div className="portfolio-filter">
          <button data-filter className="is-checked">All</button>
          <button data-filter=".cat1">Design</button>
          <button data-filter=".cat2">Marketing</button>
          <button data-filter=".cat3">Branding</button>
          <button data-filter=".cat4">Development</button>
        </div>
      </div>
    </div>
    <div className="row">
        {templates.map((t)=>(
      <div className="col-lg-12 col-md-12">
        <div className="grid columns-3 row no-gutters popup-gallery">
          <div className="grid-sizer" />
          <div className="grid-item cat3">
            <div className="portfolio-item">
              <img className="img-center w-100" src={`/uploads/${t.fileName}`} alt />
              <div className="portfolio-title">
                <h4>{t.title}</h4>
              </div>
 
            </div>
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
