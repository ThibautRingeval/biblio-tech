import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  private apiUrl = 'https://66100fb60640280f219c3444.mockapi.io/api/v1/book/';

  constructor(private http: HttpClient) { }

  getAllbooks() {
    return this.http.get(this.apiUrl);
  }

  deletebooksById(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
