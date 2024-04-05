import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';  // Assurez-vous que le chemin d'accès est correct
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpProviderService } from './Service/http-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importez le module de routage principal
    RouterModule // Importez RouterModule
  ],
  providers: [
    HttpProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
