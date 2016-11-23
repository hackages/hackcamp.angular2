import { Component } from '@angular/core';
import { sections } from '../../mocks/sections';
import { Section } from '../../types/section';
import { AppService } from '../../app.service';

@Component({
    moduleId: __moduleName,
    selector: 'dashboard',
    templateUrl: 'dashboard.template.html',
    providers: [ AppService ]
})
export class DashboardComponent {
    title: string = "Amazon by @Hackages!";
    sections//: Section[];

    constructor(private appService: AppService){}

    ngOnInit() {
        // Synchronous process
        // this.sections = this.appService.getSections();

        // Asynchronous process 
        this.sections = this.appService.getAsyncSections()
          //.then((sections) => this.sections = sections);
    }
}