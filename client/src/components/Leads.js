import React, { useEffect } from 'react'
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeads } from '../redux/actions/leadActions';
import Menu from './Menu'

const Leads = () => {


    const dispatch = useDispatch ();
    const {leads} =useSelector(state => state.leads)
    
    useEffect(() => {
      dispatch(getLeads());
      
     }, [dispatch])

    return (
        <div>
            <Menu />
            <div className="page-wrapper">
            {/* Page Title */}
            <div className="page-title">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h2 className="page-title-text">Clients List :</h2>
                </div>
                
            <table class="table table-striped">
            
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Raison social</th>
      <th scope="col">Adresse</th>
      <th scope="col">Catégorie du produit</th>
      <th scope="col">produits </th>
      <th scope="col">facebook Link </th>
      <th scope="col">instagram Link </th>
      <th scope="col">siteweb Link </th>
      <th scope="col">Offre </th>
      <th scope="col">Template </th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">numtel</th>
      
    </tr>
  </thead>
  
  <tbody>
  {leads.map((lead)=>(
    <tr>
      <th scope="row">#</th>
      <td>{lead.raisonSocial}</td>
      <td>{lead.adresse}</td>
      <td>{lead.catproduit}</td>
      <td>{lead.produit}</td>
      <td>{lead.facebookLink}</td>
      <td>{lead.instagramLink}</td>
      <td>{lead.sitewebLink}</td>
      <td>{lead.refOffre}</td>
      <td>{lead.refTemplate}</td>
    
          <td>{lead.refuser.username}</td>
          <td>{lead.refuser.email}</td>
          <td>{lead.refuser.numtel}</td>
      
    </tr>
  ))}
  </tbody>
  
</table>

        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Leads
