import { Component } from '@angular/core';
import { Book } from '../../types/book';
import { Category } from '../../types/category';
import { AppService } from '../../app.service';

@Component({
  moduleId: __moduleName,
  selector: 'bookstore',
  templateUrl: 'bookstore.template.html',
  providers: [ AppService ]
})
export class BookStoreComponent {
  books: Book[];
  categories: Category[];
  navClosed: boolean = true;
  title: string = "Bookstore by Hackages";
  initialData: { books: Book[], categories: Category[] } = {books: [], categories: []};

  constructor(private appServie: AppService){}

  public ngOnInit() {
    this.changeCategory = this.changeCategory.bind(this);
    // Get the books
    this.appServie.getBooks()
      .then(books => {
        this.books = books;
        this.initialData.books = books;
    });

    // Get the categories
    this.categories = this.appServie.getCategories();
  }

  getBookDetail(): void {
    console.log('Will be implemented in the next section');
  }

  changeCategory(selectedCategory: Category): void {
      this.categories = this.categories.map(category => {
          category.selected = category.name === selectedCategory.name;
        return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if(category.name === "All") {
        this.books = this.initialData.books;
        return;
    }
    this.books = this.initialData.books.filter(book => book.category === category.name);
  }

  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase();
    this.books = this.initialData.books.filter(book => {
        return book.title.toLowerCase().includes(searchTerm) ||
            book.category.toLocaleLowerCase().includes(searchTerm);
    });
  }

  toggleSidebar(open: boolean): void {
    this.navClosed = open;
  }
}