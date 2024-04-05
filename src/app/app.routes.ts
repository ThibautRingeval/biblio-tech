import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { HomeComponent } from './home/home.component';
import { ViewbooksComponent } from './view-books/view-books.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewEmployee/:BooksId', component: ViewbooksComponent },
  { path: 'AddEmployee', component: AddbooksComponent },
  { path: 'EditEmployee/:BooksId', component: EditBooksComponent } 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }