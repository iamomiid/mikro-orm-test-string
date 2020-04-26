import { MikroORM } from 'mikro-orm';
import { ObjectID } from 'mongodb';
import Test from './entities/test';

async function start() {
	const orm = await MikroORM.init({
		entitiesDirs: ['build/entities'],
		entitiesDirsTs: ['src/entities'],
		dbName: 'mikro-test',
		logger: console.log.bind(console),
		debug: true,
	});
	const testID = new ObjectID();
	const newItem = new Test();
	newItem.another = testID.toHexString();
	await orm.em.getRepository(Test).persistAndFlush(newItem);
	const element = await orm.em.getRepository(Test).findOneOrFail({ another: testID.toHexString() });
	console.log(element);
	console.log('Done');
}

start();
