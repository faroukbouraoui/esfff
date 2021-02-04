const validate = (inputs) => {
    
   const errors = {};
   if (!inputs.raisonSocial) {
       errors.raisonSocial = 'Check Email';
   } 

   if(!inputs.adresse){
       errors.adresse = ' check Adresse'
   }


   return errors;
}

export default validate;