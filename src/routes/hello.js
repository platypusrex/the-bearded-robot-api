import Router from 'koa-router';

const router = new Router();

router.get('/hello', function() {this.body = 'hello';});

export default router;
