import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../redux/actions/serviceActions';
import Navbar from './Navbar'
import './ServiceSingle.css'
import Footer from './pages/Footer/Footer';
const SingleServices = () => {

  const dispatch = useDispatch ();
  const {services} =useSelector(state => state.services)
  
useEffect(() => {
dispatch(getServices())
}, [dispatch])

var tab1 = services.splice(0,4);
console.log(tab1)
var tab2 = services.splice(4,8);
console.log(tab2)

    return (
<div>
<Navbar/>
<section className="animatedBackground page-titlee o-hidden text-center grey-bg bg-contain " style={{backgroundImage:"url('deco/images/pattern/05.png')"}} >
<div className="container">
  <div className="row align-items-center">
  <div class="col-md-12">
<h1 class="title">Services</h1>

</div>
  </div>
</div>
<div className="page-title-pattern"><img className="img-fluid" style={{backgroundImage:"url('deco/images/bg/06.png')"}} alt /></div>
</section>
  <section className="pos-r bg-contain bg-pos-r pt-0" style={{backgroundImage:"url('deco/images/bg/02.png')"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 image-column bg-contain bg-pos-l" style={{backgroundImage:"url('deco/images/pattern/07.png')",marginTop:"30%"}}>
          <img className="img-fluid" src="deco/images/about/services-02.png" alt />
        </div>
        
        <div className="col-lg-6 col-md-12 ml-auto md-mt-5 pl-lg-5">
          <div className="section-title">
            <h6>How It Work</h6>
            <h2 className="title">Three Step For Started Working Process</h2> 
          </div>
          {tab1.map((s,i=1)=>(
          <div className="work-process style-2">
            <div className="work-process-inner" style={{padding:"20px",paddingLeft:"80px"}}> <span className="step-num" data-bg-color="#cd113a">{i}</span>
              <h4>{s.serviceName}</h4>
              <p className="mb-0">{s.serviceDesc}</p>
            </div>
          </div>
          ))}
        </div>
        
      </div>
      <div className="row">
     
      
      <div className="col-lg-6 col-md-12 ml-auto md-mt-5 pl-lg-5">
        
        {tab2.map((s,i=1)=>(
        <div className="work-process style-2">
          <div className="work-process-inner" style={{padding:"20px",paddingLeft:"80px"}}> <span className="step-num" data-bg-color="#cd113a">{i}</span>
            <h4>{s.serviceName}</h4>
            <p className="mb-0">{s.serviceDesc}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="col-lg-6 image-column bg-contain bg-pos-l" style={{backgroundImage:"url('deco/images/pattern/07.png')",marginTop:"20%"}}>
      <img className="img-fluid" src="deco/images/about/01.png" alt />
    </div>
    </div>
    <div className="row">
      <div className="col-lg-6 image-column bg-contain bg-pos-l" style={{backgroundImage:"url('deco/images/pattern/07.png')",marginTop:"20%"}}>
        <img className="img-fluid" src="deco/images/about/services-01.png" alt />
      </div>
      
      <div className="col-lg-6 col-md-12 ml-auto md-mt-5 pl-lg-5">
        
        {services.map((s,i=1)=>(
        <div className="work-process style-2">
          <div className="work-process-inner" style={{padding:"23px",paddingLeft:"80px"}}> <span className="step-num" data-bg-color="#cd113a">{i}</span>
            <h4>{s.serviceName}</h4>
            <p className="mb-0">{s.serviceDesc}</p>
          </div>
        </div>
        ))}
      </div>
      
    </div>
      
    </div>
  </section>
  <Footer />
</div>

    )
}

export default SingleServices
