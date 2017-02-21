import 'babel-polyfill';
import Supplier from '../models/supplierModel';

class SuppliersController {
	async find(ctx) {
		ctx.body = await Supplier.find();
	}

	async findById(ctx) {
		try {
			const supplier = await Supplier.findById(`${ctx.params.id}`);
			if (!supplier) {
				ctx.throw(404);
			}
			ctx.body = supplier;
		} catch(err) {
			if (err.name === 'CastError' || err.name === 'NotFoundError') {
				ctx.throw(404);
			}
			ctx.throw(500);
		}
	}

	async add(ctx) {
		try {
			const supplier = await new Supplier(ctx.request.body).save();
			if(!supplier) {
				this.throw(404);
			}
			ctx.body = supplier;
		} catch(err) {
			ctx.throw(422);
		}
	}

	async update(ctx) {
		try {
			const supplier = await Supplier.findByIdAndUpdate(`${ctx.params.id}`, ctx.request.body, {new: true});
			if(!supplier) {
				ctx.throw(404);
			}
			ctx.body = supplier;
		} catch(err) {
			if (err.name === 'CastError' || err.name === 'NotFoundError') {
				ctx.throw(404);
			}
			ctx.throw(500);
		}
	}

	async delete(ctx) {
		try {
			const supplier = await Supplier.findByIdAndRemove(`${ctx.params.id}`);
			if(!supplier) {
				ctx.throw(404);
			}
			ctx.body = supplier;
		} catch(err) {
			if (err.name === 'CastError' || err.name === 'NotFoundError') {
				ctx.throw(404);
			}
			ctx.throw(500);
		}
	}
}

export default new SuppliersController();
