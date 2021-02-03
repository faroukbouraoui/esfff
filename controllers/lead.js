const Lead = require("../models/Lead");

exports.create = async (req, res) => {
  const {
    raisonSocial,
    
    catproduit,
    produit,
    adresse,
    facebookLink,
    instagramLink,
    sitewebLink,
    offre,
    template,
    services
  } = req.body.userData;

  try {
    console.log(req.body);
    console.log(req.body.userid);
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
    console.log(lead);
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

		res.json({ leads});
	} catch (err) {
		console.log(err, 'leadController.readAll error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};