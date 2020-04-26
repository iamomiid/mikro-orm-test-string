import { Entity, MongoEntity, PrimaryKey, SerializedPrimaryKey, Property } from 'mikro-orm';
import { ObjectID } from 'mongodb';

@Entity()
export default class Test implements MongoEntity<Test> {
	@PrimaryKey()
	_id!: ObjectID;

	@SerializedPrimaryKey()
	id!: string;

	@Property()
	another!: string;

	@Property()
	createdAt = new Date();
}
