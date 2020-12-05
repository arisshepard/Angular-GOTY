export interface Game {
  id: string;
  name: string;
  url: string;
  votos: number;
}

export interface RespuestaAPI {
  ok: boolean;
  mensaje: string;
}
