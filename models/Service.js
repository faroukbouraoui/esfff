const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ServiceSchema = new mongoose.Schema(
	{
		
		fileName: {
			type: 'String',
			required: true,
		},
		serviceName: {
			type: 'String',
			required: true,
			trim: true,
			maxlength: 60,
		},
		serviceDesc: {
			type: 'String',
			trim: true,
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
