import { Component } from '@angular/core';
import { mockBooks } from '../../mocks/books';
import { categories } from '../../mocks/categories';
import { Book } from '../../types/book';
import { Category } from '../../types/category';

@Component({
  moduleId: __moduleName,
  selector: 'bookstore',
  templateUrl: 'bookstore.template.html'
})
export class AppComponent {
  books: Book[] = mockBooks;
  categories: Category[] = categories;
  navClosed: Boolean = true;
  title: string = "Bookstore by Hackages"

  getBookDetail(): void {
    console.log('Will be implemented in the next section');
  }

  changeCategory(selectedCategory: Category): void {
      console.warn('not implemented yet!!');
  }

  filterBooks(category: Category): void {
      console.warn('not implemented yet!!');
  }

  search(): void {
      console.warn('not implemented yet!!');
  }

  toggleSideBar(): void {
      console.warn('not implemented yet!!');
  }
}
