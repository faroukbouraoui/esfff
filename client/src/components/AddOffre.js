import Axios from 'axios'
import React, { Fragment,useEffect, useState } from 'react'

import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createOffre } from '../redux/actions/offreActions';

import Menu from './Menu'
import { getServices } from '../redux/actions/serviceActions';


 const AddOffre = () => {

	const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	const { services } = useSelector(state => state.services);
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');
  

  const [offreData, setOffreData] = useState({
		offreImage: null,
		name: '',
    description: '',
    price:'',
		servicesOffre: '',
		
  });
  
  const {
		offreImage,
		name,
    description,
    price,
		servicesOffre,

	} = offreData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleOffreChange = evt => {
		setOffreData({
			...offreData,
			[evt.target.name]: evt.target.value,
		});
  };
  
  const handleOffreImage = evt => {
		console.log(evt.target.files[0]);
		setOffreData({
			...offreData,
			[evt.target.name]: evt.target.files[0],
		});
	};

  useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);


	const handleOffreSubmit = evt => {
		evt.preventDefault();

		if (offreImage === null) {
			setClientSideError('Please select an image');
		} else if (
			isEmpty(name) ||
      isEmpty(description)||
      isEmpty(price) 
			
		) {
			setClientSideError('Please enter all fields');
		} else if (isEmpty(servicesOffre)) {
			setClientSideError('Please select a services');
		} else {
			let formData = new FormData();

			formData.append('offreImage', offreImage);
			formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
			formData.append('servicesOffre', servicesOffre);
		

			dispatch(createOffre(formData));
			setOffreData({
				offreImage: null,
				name: '',
        description: '',
        price:'',
				servicesOffre: '',
		
			});
		}
	};

  
  return (
            <div>
            <Menu />
            <div className="page-wrapper" onClick={handleMessages}>
            <div className="page-title">
            
            
            <div className="page-body">
            <div className="row">
            <div className="col-12">
            <div className="panel panel-default">
    <div className="panel">
      <div className="panel-head">
        <h5 className="panel-title">Add Offre</h5>
      </div>
      <div className="panel-body">
        <form>
        {clientSideError && showErrorMsg(clientSideError)}
        {errorMsg && showErrorMsg(errorMsg)}
        {successMsg && showSuccessMsg(successMsg)}
  
        {loading ? (
          <div className='text-center'>
            {showLoading()}
          </div>
        ) : (
      <Fragment>
        <div className='custom-file mb-2'>
        <input
          type='file'
          className='custom-file-input'
          name='offreImage'
          onChange={handleOffreImage}
        />
        <label className='custom-file-label'>
          Choose File
        </label>
      </div>
  
  
          
          <div className="form-group row">
            <label className="col-12 col-form-label" >Offre name <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
            <div className="col-12">
              <input name='name' value={name} onChange={handleOffreChange} type="text" className="form-control" placeholder="placeholder" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label">offre description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
            <div className="col-12">
              <textarea value={description} name='description' onChange={handleOffreChange} className="form-control" rows={5} defaultValue={""} />
            </div>
          </div>
          <div className="form-group row">
          <label className="col-12 col-form-label">Price per month<i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
          <div className="col-12">
            <input value={price} name='price' onChange={handleOffreChange} type="number" className="form-control" placeholder="price" />
          </div>
        </div>
        <div className="form-group row">
        <label className="col-12 col-form-label">Services<i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
       
        <select
        className='custom-select mr-sm-2'
        name='servicesOffre'
        onChange={handleOffreChange}
      >
        <option value=''>
          Choose one...
        </option>
        {services &&
          services.map(c => (
            <option
              key={c._id}
              value={c._id}
            >
              {c.serviceName}
            </option>
          ))}
      </select>
      
        </div>
      </div>
      </Fragment>
      )}
      <div className="panel-footer text-right">
      <button type="submit" className="btn btn-success mr-2" onClick={handleOffreSubmit} >Submit</button>
      <button type="reset" className="btn btn-outline btn-secondary btn-outline-1x">Cancel</button>
    </div>
        </form>
      </div>
      
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div></div>
        )
    }
    
export default AddOffre
