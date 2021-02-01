const NewsletterModel = require ('./../models/Newsletter')

exports.create = async (req, res) => {
    
    const {
    email
      
    } = req.body;
  
    try {
      const newsletter = new NewsletterModel();
         
         
          newsletter.email= email;
         
         
      
  
      await newsletter.save();
  
      res.json({
        successMessage: `${email} was created`,
        newsletter,
      });
    } catch (err) {
      console.log(err, 'error');
      res.status(500).json({
        errorMessage: 'Please try again later',
      });
    }
}

exports.readAll= async (req, res)=>{
	try {
		const newsletters = await NewsletterModel.find({});

		res.status(200).json({
			newsletters,
		});
	} catch (err) {
		console.log('newsletter readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
}