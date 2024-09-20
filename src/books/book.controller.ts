import { Controller, Delete, Get, Post, Put, Body, Query, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Book } from './book.model';

@Controller('books')
export class BooksController {
  constructor(
    @InjectModel(Book)
    private readonly bookModel: typeof Book,
  ) {}

  @Post() // CREATE
  async create(@Body() createBookDto: { title: string; author: string; year: number }): Promise<Book> {
    const book = await this.bookModel.create(createBookDto);
    return book;
  }

  @Get() // READ
  async findAll(@Query('title') title?: string): Promise<Book[]> {
    if (title) {
      return this.bookModel.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
      });
    }
    return this.bookModel.findAll();
  }

  @Put() // UPDATE
  async update(@Body() updateBookDto: { id: string; title: string; author: string; year: number }): Promise<Book> {
    const book = await this.bookModel.findByPk(updateBookDto.id);
    if (!book) {
      throw new NotFoundException('Book Not Found');
    }
    await book.update(updateBookDto);
    return book;
  }

  @Delete() // DELETE
  async remove(@Body() body: { id: string }): Promise<{message: string, book:Book}> {
    const book = await this.bookModel.findByPk(body.id);
    if (!book) {
      throw new NotFoundException('Book Not Found');
    }
    await book.destroy();
    return ({
      message: "Book deleted",
      book: book
    });
  }
}
