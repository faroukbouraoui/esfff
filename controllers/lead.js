const Lead = require("../models/Lead");
const nodemailer = require('nodemailer');
const User = require ('../models/User')


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'faroukbr050@gmail.com',
        pass:'isamm@2020'
    }
});

exports.create = async (req, res) => {
  const {
    raisonSocial,
    
    catproduit,
    
    adresse,
    facebookLink,
    instagramLink,
    sitewebLink,
    
    services
  } = req.body.obj1;
  const offre = req.body.obj2
  const template= req.body.obj3
    
 const produit = req.body.produit
  try {
    
    let lead = new Lead();
    lead.raionSocial = raisonSocial;
    lead.catproduit = catproduit;
   
    lead.produit = produit;
    lead.adresse = adresse;
    lead.facebookLink= facebookLink;
    lead.instagramLink=instagramLink;
    lead.sitewebLink=sitewebLink;
    lead.refService= services;
    lead.refOffre = offre;
    lead.refTemplate = template;
    lead.refuser = req.body.userid;
    
    
  
    const leads = await Lead.find({}).populate(
			'refuser',	
		);
   const cds = leads.map((l)=>{
     return l.refuser
   })
   
    const fg = cds.map((f)=>{
      const hd = f._id;
      
      if(hd === ( lead.refuser)){
        return fg;
      }
        
        
     
      
    })
  console.log(fg)

    await lead.save();
    
    res.json({
      successMessage: "done",
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errorMessage: "Please try again later",
    });
  }


};
exports.readAll = async (req, res) => {
	try {
		const leads = await Lead.find({}).populate(
			'refuser',
			
			
			
			
		);
      console.log(leads)
		res.json({ leads});
	} catch (err) {
		console.log(err, 'leadController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

