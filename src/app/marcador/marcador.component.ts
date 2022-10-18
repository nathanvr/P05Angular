import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss'],
})
export class MarcadorComponent implements OnInit {
  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {
    nombre: 'lakers',
    logo: '/assets/img/LAL.svg',
    jugadores: [
      {
        nombre: 'Thomas Isaias',
        puntos: 0,
        imagen: '/assets/img/thomas.png',
      },
      {
        nombre: 'Kyle Kuzma',
        puntos: 0,
        imagen: '/assets/img/kuzma.png',
      },
      {
        nombre: 'Julius Randle',
        puntos: 0,
        imagen: '/assets/img/randle.png',
      },
      {
        nombre: 'Brandom Ingram',
        puntos: 0,
        imagen: '/assets/img/ingramm.png',
      },
      {
        nombre: 'Brook Lopez',
        puntos: 0,
        imagen: '/assets/img/lopez.png',
      },
    ],
  };

  equipoVisitante: any = {
    nombre: 'Celtics',
    logo: '/assets/img/BOS.svg',
    jugadores: [
      {
        nombre: 'Kadeen Allen',
        puntos: 0,
        imagen: '/assets/img/Allen.png',
      },
      {
        nombre: 'Aaron Bynes',
        puntos: 0,
        imagen: '/assets/img/bynes.png',
      },
      {
        nombre: 'Jabary Bird',
        puntos: 0,
        imagen: '/assets/img/bird.png',
      },
      {
        nombre: 'Jaylen Brown',
        puntos: 0,
        imagen: '/assets/img/brown.png',
      },
      {
        nombre: 'Jonathan Gibson',
        puntos: 0,
        imagen: '/assets/img/gibson.png',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
