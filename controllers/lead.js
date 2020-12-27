const Lead = require("../models/Lead");

exports.create = async (req, res) => {
  const {
    nomComplet,
    entreprise,
    rne,
    telephone,
    adresse,
    offer,
    template,
  } = req.body.userData;

  try {
    console.log(req.body);
    console.log(req.body.userid);
    let lead = new Lead();
    lead.NomComplet = nomComplet;
    lead.entreprise = entreprise;
    lead.rne = rne;
    lead.numtel = telephone;
    lead.adresse = adresse;
    lead.refOffre = offer;
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
