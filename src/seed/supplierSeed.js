import 'babel-polyfill';
import Supplier from '../models/supplierModel';

const suppliers = [
	{
		name: 'Starbucks',
		deliveryLine: '199 Late Lane',
		city: 'Black Mountain',
		state: 'NC',
		zip: 29384,
		phone: 7048348931,
		email: 'starbuck@starbucks.support.com',
		category: 'Caffeine'
	},
	{
		name: 'Redbull',
		deliveryLine: '138 Wings Way',
		city: 'High Point',
		state: 'NC',
		zip: 29385,
		phone: 7043838484,
		email: 'getwings@redbull.com',
		category: 'Caffeine'
	},
	{
		name: 'Apple Store',
		deliveryLine: '8348 King Street',
		city: 'Charleston',
		state: 'SC',
		zip: 29403,
		phone: 8434059595,
		email: 'apple.charleston@apple.com',
		category: 'Gear'
	},
	{
		name: 'Google',
		deliveryLine: '8348 BetterThanIos Blvd.',
		city: 'Ladson',
		state: 'SC',
		zip: 29838,
		phone: 8439993847,
		email: 'google.charleston@gmail.com',
		category: 'Gear'
	},
	{
		name: 'Papa Zuzu',
		deliveryLine: '834 Coleman Blvd.',
		city: 'Mt. Pleasant',
		state: 'SC',
		zip: 29464,
		phone: 8433038348,
		email: 'papazuzu@gmail.com',
		category: 'Munchies'
	},
	{
		name: 'Xiao Bao Biscuit',
		deliveryLine: '9349 Spring St.',
		city: 'Charleston',
		state: 'SC',
		zip: 29403,
		phone: 8437778283,
		email: 'xiaobao@gmail.com',
		category: 'Munchies'
	}
];

export function seedDb() {

	suppliers.forEach(supplier => {
		Supplier.find({"name": supplier.name}).remove().exec();
		new Supplier(supplier).save();
	});
}