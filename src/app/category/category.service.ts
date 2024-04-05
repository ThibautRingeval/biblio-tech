import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories');
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('/api/categories', category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`/api/categories/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`/api/categories/${id}`);
  }
}
