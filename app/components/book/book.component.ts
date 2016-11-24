import { Component, Input } from '@angular/core';
import { Book } from '../../types/book';

@Component({
    moduleId: __moduleName,
    selector: 'bs-book',
    templateUrl: 'book.template.html'
})
export class BookComponent {
    @Input('dataSource') books: Book[];
    @Input() navClosed: boolean;
}