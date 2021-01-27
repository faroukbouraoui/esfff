const express = require('express')

const router = express.Router()
const ContactModel = require ('./../models/Contact')
const contactController = require('../controllers/contact')
router.get('/readall', async(req,res)=>{
    try{
        const contact = await ContactModel.find()
        if(!contact) throw Error ('no contact found');
        res.status(200).json(contact)
    }catch(err){
        res.status(400).json({msg:err})
    }
})

router.post('/',
	
	
contactController.create
);

module.exports=router