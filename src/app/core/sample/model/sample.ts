import { Table, Column, DataType } from 'sequelize-typescript';
import { db, BaseModel } from 'core/common/db'

@Table({tableName: 'sample'})
export class Sample extends BaseModel<Sample> {

}

db.addModels([Sample])