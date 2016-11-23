import { Component } from '@angular/core';
import { sections } from './mocks/sections';
import Section from './types/section';

@Component({
    moduleId: module.id,
    styles: [`
     a.section {
        text-align: center;
        color: black;
        font-size: 20px;
        font-weight: 600;
        background: aliceblue;
     }
    `],
    selector: 'dashboard',
    template: 'dashboard.template.html',
})
export class DashboardComponent {
    title: string = "Amazon by @Hackages!";
    sections: Section[] = sections;
}