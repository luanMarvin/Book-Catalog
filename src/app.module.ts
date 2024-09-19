import { Module } from '@nestjs/common';
import { BooksController } from './books/book.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './books/book.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './database.sqlite',
      autoLoadModels: true,
      synchronize: true,
      logging: false
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [BooksController],
  providers: [],
})
export class AppModule {}
