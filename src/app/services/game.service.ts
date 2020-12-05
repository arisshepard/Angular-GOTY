import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Game, RespuestaAPI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private juegos: Game[] = [];
  constructor(private http: HttpClient) {}

  getNominados(): Observable<Game[]> {
    if (this.juegos.length !== 0) {
      console.log('Juegos desde caché');

      return of(this.juegos);
    } else {
      console.log('Juegos desde petición');
      return this.http.get<Game[]>(`${environment.url}/api/goty`).pipe(
        tap((juegos) => {
          this.juegos = juegos;
        })
      );
    }
  }

  votarJuego(id: string): Observable<RespuestaAPI> {
    return this.http
      .post<RespuestaAPI>(`${environment.url}/api/goty/${id}`, {})
      .pipe(
        catchError((error) => {
          // console.log('Error en la petición');
          return of(error.error);
        })
      );
  }
}
