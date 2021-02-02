

const ContactModel = require ('./../models/Contact')

exports.create = async (req, res) => {
    
    const {
      nom,
      email,
      phone,
      demande
      
    } = req.body;
  
    try {
      let contact = new ContactModel();
         
          contact.nom= nom;
          contact.email= email;
          contact.phone= phone;
          contact.demande=demande;
         
      
  
      contact = await contact.save();
  
      res.status(200).json({
        nom:contact,
        successMessage: `${contact.nom} was created`,
       
      });
    } catch (err) {
      console.log(err, 'error');
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
}