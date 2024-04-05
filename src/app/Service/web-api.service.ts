import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  constructor(private httpClient: HttpClient) { }

  // Méthode pour effectuer une requête GET
  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }),
      observe: 'response' as 'body'
    };
    return this.httpClient.get(
      url,
      httpOptions
    ).pipe(
      map((response: any) => this.returnResponseData(response)),
      catchError(this.handleError)
    );
  }

  // Méthode pour effectuer une requête POST
  post(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body'
    };
    return this.httpClient.post(
      url,
      model,
      httpOptions
    ).pipe(
      map((response: any) => this.returnResponseData(response)),
      catchError(this.handleError)
    );
  }
  
  // Fonction utilitaire pour extraire les données de la réponse HTTP
  private returnResponseData(response: any) {
    return response;
  }
  
  // Gestionnaire des erreurs HTTP
  private handleError(error: any) {
    return throwError(error);
  }
}
