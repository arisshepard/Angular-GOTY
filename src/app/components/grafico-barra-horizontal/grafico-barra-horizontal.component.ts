import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styles: [],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() results: { name: string; value: number }[] = [];

  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 20,
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 10,
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 30,
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 40,
  //   },
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo: any;

  constructor() {
    // Object.assign(this, { single });
    // this.intervalo = setInterval(() => {
    //   // console.log('tick');
    //   const newResults = [...this.results];
    //   // tslint:disable-next-line: forin
    //   for (const i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults];
    // }, 1500);
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

  onSelect(event): void {
    console.log(event);
  }
}
