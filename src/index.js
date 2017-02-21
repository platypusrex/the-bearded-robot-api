import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'kcors';
import mongoose from 'mongoose';
import routing from './routes';
import * as seeder from './seed/supplierSeed';
import { port, dbLocation } from './config';

mongoose.connect(dbLocation);
seeder.seedDb();
mongoose.connection.on('error', console.error);

const app = new Koa();

app
	.use(cors())
	.use(logger())
	.use(bodyParser());

routing(app);

app.listen(port, () => console.log(`The server is running at http://localhost:${port}/`));

export default app;