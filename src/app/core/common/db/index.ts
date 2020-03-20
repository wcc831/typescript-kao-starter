import { Sequelize, Model, Column, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';
import { k } from 'src/project-env';

export const db = new Sequelize({
  database: k.DB,
  dialect: k.DB_DIALECT,
  username: k.DB_USERNAME,
  password: k.DB_PASSWORD,
  models: []
});

export class BaseModel<M> extends Model<M> {
  @CreatedAt
  @Column({type: DataType.DATE, field: 'created_at'})
  createdAt: Date
  
  @UpdatedAt
  @Column({type: DataType.DATE, field: 'updated_at'})
  updatedAt: Date
}

export function transaction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  db.transaction(async t => {

    const method = descriptor.value;

    descriptor.value = (...args: Array<any>) => method.apply(this, args);

  })
}