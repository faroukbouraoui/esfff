import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../redux/actions/serviceActions';
import './Fourthstep.scss'
const Fourthstep = () => {


    const dispatch = useDispatch ();
    const {services} =useSelector(state => state.services)
  
    useEffect(() => {
      
      dispatch (getServices())
    }, [dispatch])

    
    return (
        <div>
        <h2>Services supplémentaires</h2>
        {services.map((service)=>(
        <div class="group">
          <input type="checkbox" name="cb" id={service._id} />
          <label for={service._id}>{service.serviceName}</label>
          </div>
          ))}
        </div>
    )
}

export default Fourthstep
