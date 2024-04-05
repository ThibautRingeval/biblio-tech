import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { HomeComponent } from './home/home.component';
import { ViewBooksComponent } from './view-books/view-books.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewBooks/:BooksId', component: ViewBooksComponent },
  { path: 'AddBooks', component: AddBooksComponent },
  { path: 'EditBooks/:BooksId', component: EditBooksComponent } 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }