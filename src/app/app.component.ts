import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {}

  // Définition de la méthode HomeClick()
  HomeClick() {
    // Rediriger l'utilisateur vers la page d'accueil
    this.router.navigate(['/Home']);
  }
}
