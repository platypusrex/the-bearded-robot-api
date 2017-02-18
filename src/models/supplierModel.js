import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const supplierSchema = new Schema({
	name: String,
	deliveryLine: String,
	city: String,
	state: String,
	zip: Number,
	phone: Number,
	email: String,
	category: String
});

export default mongoose.model('Supplier', supplierSchema);