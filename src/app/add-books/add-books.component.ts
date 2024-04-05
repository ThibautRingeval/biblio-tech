import { Component, OnInit } from '@angular/core';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  constructor(private httpProvider: HttpProviderService) { }

  ngOnInit(): void { }

  addBook(isValid: boolean) {
    // Logique d'ajout de livre en utilisant les méthodes du service
  }
}
