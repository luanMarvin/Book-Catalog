import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  author: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;
}
