import React from 'react'

const DescriptionSectioon = () => {
    return (
        <div>
        <section className="grey-bg pos-r text-center">
        <div style={{position:"absolute",left:"27%",top:"18%",WebkitTransform:"translateX(-50%) translateY(-50%);"}}>
          <img className="img-fluid rotateme" src="deco/images/pattern/03.png" alt="" />
        </div>
        <div className="container">
         
            
             <div className="section-title" style={{paddingTop:"5%"}}>
             <h2>A vos côté,quelque soit votre projet<br/> e-commerce</h2>
             </div>
             <h6 style={{paddingBottom:"7%"}}>Une platforme unifiée et dotée de toutes les fonctionnalités e-commerce, et un centre de services à votre disposition pour gérer et développer votre activité en ligne</h6>
            </div>
          
            </section>
        </div>
    )
}

export default DescriptionSectioon
