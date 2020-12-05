import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game, RespuestaAPI } from '../../interfaces/interfaces';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: [],
})
export class GotyComponent implements OnInit {
  juegos: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getNominados();
  }

  votarJuego(juego: Game): void {
    // console.log('Juego: ', juego);

    this.gameService
      .votarJuego(juego.id)
      .subscribe((respuesta: RespuestaAPI) => {
        // console.log('Respuesta voto: ', respuesta);

        if (respuesta.ok) {
          Swal.fire({
            title: 'Gracias',
            text: respuesta.mensaje,
            icon: 'success',
            confirmButtonText: 'Genial',
            allowOutsideClick: false,
          });
        } else {
          Swal.fire({
            title: '¡Ups!',
            text: respuesta.mensaje,
            icon: 'error',
            confirmButtonText: 'Gracias',
            allowOutsideClick: false,
          });
        }
      });
  }

  private getNominados(): void {
    this.gameService.getNominados().subscribe((juegos: Game[]) => {
      // console.log('Juegos: ', juegos);
      this.juegos = juegos;
    });
  }
}
