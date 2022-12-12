import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService{

    public books : Book[] = [];


    //add book 
    addBookService(book : Book) : string{
        book.id = uuidv4();
        this.books.push(book);
        return "Book has been successfully added"
    }

    //delete book
    deleteBookService(bookId : string): string {   
        this.books = this.books.filter((book)=>{
            return book.id != bookId;
        });
        return " this will deleting book";
    }

    //update book
  
    updateBookService(book : Book): string {
        let index = this.books.findIndex((currentBook)=>{
            return currentBook.id = book.id;
        });
        this.books[index] = book;   
        return `Book has been upadated `
    }

    //find all book
 
    findAllBook(): Book[] {
        return this.books;
    }

}