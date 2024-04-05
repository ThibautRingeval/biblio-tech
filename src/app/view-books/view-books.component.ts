import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  bookId!: string; // Ajouter le signe '!' pour indiquer à TypeScript que la propriété sera initialisée dans le ngOnInit ou par une route active
  book: any;

  constructor(
    private route: ActivatedRoute,
    private webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('BooksId') || ''; // Utiliser l'opérateur de coalescence nulle pour assurer que bookId est toujours une chaîne de caractères
    this.getBookDetails();
  }

  getBookDetails(): void {
    this.webApiService.get('https://66100fb60640280f219c3444.mockapi.io/api/v1/book/' + this.bookId)
      .subscribe(
        (response: any) => {
          this.book = response.body;
        },
        (error: any) => {
          console.error('Une erreur est survenue lors de la récupération des détails du livre :', error);
        }
      );
  }
}
