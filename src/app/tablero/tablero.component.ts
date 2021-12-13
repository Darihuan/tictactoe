import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  jugador = 1;
  tablero: number[][] = new Array(3).fill([]).map(fila => new Array(3).fill(0));
  ganador = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  turno(x: number, y: number) {
    if (this.tablero[x][y] == 0 && this.ganador == 0) {
      this.tablero[x][y] = this.jugador;
      if (this.jugador == 1) {
        this.jugador = 2
      } else {
        this.jugador = 1;
      }
    }
    this.analizarPartida();


  }

  analizarPartida(): number {

    let analizar = "";
    //horizontal
    // @ts-ignore
    this.tablero.forEach(fila => {
      analizar = "";
      fila.forEach(numero => {
        analizar += numero;
      })
      if (this.hayGanador(analizar)) {
        return this.ganador;
      }
    })
    //diagonales
    analizar = "" + this.tablero[0][0] + this.tablero[1][1] + this.tablero[2][2]
    if (this.hayGanador(analizar))
      return this.ganador;
    analizar = "" + this.tablero[0][2] + this.tablero[1][1] + this.tablero[2][0]
    if (this.hayGanador(analizar))
      return this.ganador;
    //vertical
    analizar = "" + this.tablero[0][0] + this.tablero[1][0] + this.tablero[2][0]
    if (this.hayGanador(analizar))
      return this.ganador;
    analizar = "" + this.tablero[0][1] + this.tablero[1][1] + this.tablero[2][1]
    if (this.hayGanador(analizar))
      return this.ganador;
    analizar = "" + this.tablero[0][2] + this.tablero[1][2] + this.tablero[2][2]
    if (this.hayGanador(analizar))
      return this.ganador;

    return this.ganador;


  }

  hayGanador(analizar: string): boolean {
    let ganaX = "111";
    let ganaO = "222";
    if (analizar.match(ganaX)) {
      this.ganador = 1;
      return true;

    } else if (analizar.match(ganaO)) {
      this.ganador = 2
      return true;
    } else {
      return false;
    }
  }



  reiniciar() {
    this.ganador = 0;
    this.tablero = new Array(3).fill([]).map(array => new Array(3).fill(0));
    this.jugador = 1;
  }
}
