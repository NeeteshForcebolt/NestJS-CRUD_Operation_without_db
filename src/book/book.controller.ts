
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController {
    constructor( public bookService: BookService){}
    // public bookService : BookService = new BookService();

    // Find All Books
    @Get("/findAll")
    getAllBooks(): Book[]{
        return this.bookService.findAllBook()
    }

    //update book
    @Put("/update")
    updateBook(@Body() book : Book):string{
        return this.bookService.updateBookService(book);
    }

    @Delete("/delete/:id")
    deleteBook(@Param("id") bookId : string): string {
        return this.bookService.deleteBookService(bookId)
    }

   

    @Get('/findBookById/:bookId')
    findBookById(@Param() params): string{
        console.log(params.id);
        return `this actiom returns a #${params.bookId} cat`;
    }

    @Post("/add")
    addBook(@Body() book : Book): string{
        return this.bookService.addBookService(book);
    }
}