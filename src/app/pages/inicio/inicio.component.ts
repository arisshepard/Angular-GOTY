import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [],
})
export class InicioComponent implements OnInit {
  juegos: { name: string; value: number }[] = [];

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.getDatosGrafica();
  }

  private getDatosGrafica(): void {
    // Para ver los cambios en tiempo real
    this.db
      .collection('goty')
      .valueChanges()
      .pipe(
        map(
          (respuesta: Game[]) =>
            respuesta.map(({ name, votos }) => ({ name, value: votos }))
          // return respuesta.map(({ name, votos }) => ({ name, value: votos }));
          // return respuesta.map((juego) => {
          //   return { name: juego.name, value: juego.votos };
          // });
        )
      )
      .subscribe((juegos: { name: string; value: number }[]) => {
        // console.log('juegos: ', juegos);
        this.juegos = juegos;
      });
  }
}
