import 'babel-polyfill';
import Router from 'koa-router';
import SuppliersController from '../controllers/suppliers';

const api = 'suppliers';
const router = new Router();

router.prefix(`/${api}`);

router.get('/', SuppliersController.find);

router.post('/', SuppliersController.add);

router.get('/:id', SuppliersController.findById);

router.put('/:id', SuppliersController.update);

router.delete('/:id', SuppliersController.delete);

export default router;
