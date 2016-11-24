import { Component, Input } from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'bs-header',
    templateUrl: 'header.template.html'
})
export class HeaderComponent {
    @Input('appTitle') title: string;
}