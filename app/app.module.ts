import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SectionComponent } from './components/section/section.component';
import { BookStoreComponent } from './components/bookstore/bookstore.component';
import { FilterCategoryComponent } from './components/filter-category/filter-category.component';
import { BookComponent } from './components/book/book.component';
import {  SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenubarComponent,
    SectionComponent,
    FilterCategoryComponent,
    BookComponent,
    SidebarComponent,
  ],
  bootstrap: [ BookStoreComponent ]
})
export class AppModule { }