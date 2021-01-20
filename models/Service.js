const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ServiceSchema = new mongoose.Schema(
	{
		
		fileName: {
			type: 'String',
			required: false,
		},
		serviceName: {
			type: 'String',
			required: true,
			trim: true,
			
		},
		serviceDesc: {
			type: 'String',
			required:false
		},
	
		serviceCategory: 
		
		[
			{
			type: ObjectId,
			ref: 'Category',
			required: true,
		}
	],
	
	},
	{ timestamps: true }
);

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
