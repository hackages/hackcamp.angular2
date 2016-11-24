import { Component, Input } from '@angular/core';
import { Category } from '../../types/category';

@Component({
    moduleId: __moduleName,
    selector: 'bs-category',
    templateUrl: 'filter-category.template.html'
})
export class FilterCategoryComponent {
    @Input('dataSource') categories: Category[];
    @Input() changeCategory: Function;
}