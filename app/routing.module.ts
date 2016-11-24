import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookStoreComponent } from './components/bookstore/bookstore.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
  },
  {
    path: 'books', component: BookStoreComponent,
  } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // declarations: [ DashboardComponent, BookStoreComponent ],
})
export class RoutesModule { }

// export const routedComponents = [NameComponent];