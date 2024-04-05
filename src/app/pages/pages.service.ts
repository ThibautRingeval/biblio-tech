import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/pages.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getAllPages(): Observable<Page[]> {
    return this.http.get<Page[]>('/api/pages');
  }

  createPage(page: Page): Observable<Page> {
    return this.http.post<Page>('/api/pages', page);
  }

  updatePage(page: Page): Observable<Page> {
    return this.http.put<Page>(`/api/pages/${page.id}`, page);
  }

  deletePage(id: number): Observable<void> {
    return this.http.delete<void>(`/api/pages/${id}`);
  }

  getPage(id: number): Observable<Page> {
    return this.http.get<Page>(`/api/pages/${id}`);
  }

  getPagesByBookId(bookId: number): Observable<Page[]> {
    return this.http.get<Page[]>(`/api/books/${bookId}/pages`);
  }

  createPageForBook(bookId: number, page: Page): Observable<Page> {
    return this.http.post<Page>(`/api/books/${bookId}/pages`, page);
  }
}
