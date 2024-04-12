"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    constructor(initialBooks) {
        const uniqueBooks = [... new Set(initialBooks)] 
        if(uniqueBooks.length !== initialBooks.length) {
            throw new Error ('Начальный список книг содержит дубликаты')
        }
        this.#books = uniqueBooks;
    }
    get allBooks() {
        return this.#books
    }

    addBook(title) {
        if(this.#books.includes(title)) {
            throw new Error(`Книга с названием ${title} уже есть в списке`)
        }
        this.#books.push(title)
    }
    removeBook(title) {
        const index = this.#books.indexOf(title)
        if(index === -1) {
            throw new Error(`Книга с названием ${title} отсутсвует в списке`)
        }
        this.#books.splice(index, 1)
    }
    
    hasBook(title) {
        return this.#books.includes(title)
    }
    #books
}

try {
    const initialBooks = ['Book1', 'Book2', 'Book3'];
    const library = new Library(initialBooks);

    console.log(library.allBooks); 

    library.addBook('Book4');
    console.log(library.allBooks); 

    library.removeBook('Book2');
    console.log(library.allBooks); 
    console.log(library.hasBook('Book3')); 
    console.log(library.hasBook('Book5'));

    library.addBook('Book1');

    library.removeBook('Book6'); 
} catch (error) {
    console.error('Ошибка:', error.message);
}

