import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenubarComponent,
    SectionComponent 
  ],
  bootstrap: [ DashboardComponent ]
})
export class AppModule { }