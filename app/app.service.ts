import { Injectable } from '@angular/core';
import { sections } from './mocks/sections';
import { Section } from './types/section';
import { mockBooks } from './mocks/books';
import { categories } from './mocks/categories';
import { Category } from './types/category';
import { Book } from './types/book';

@Injectable()
class AppService {
  getSections(): Section[] {
     return sections; 
  }

  getAsyncSections(): Promise<Section[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(sections);
         }, 20);
     })
  }

  getCategories(): Promise<Category[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(categories);
         }, 200);
     })
  }

  getBooks(): Promise<Book[]> {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(mockBooks);
          }, 200);
      })
    }
}