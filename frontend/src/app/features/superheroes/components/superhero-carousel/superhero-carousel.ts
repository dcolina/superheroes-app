import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

export interface ISuperhero {
  id: number;
  name: string;
  age: number;
  superpower: string;
  nickname: string;
  universe: 'Marvel' | 'DC';
  image: string;
}

@Component({
  selector: 'app-superhero-carousel',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './superhero-carousel.html',
  styleUrl: './superhero-carousel.scss'
})
export class SuperheroCarousel {
  superheroes: ISuperhero[] = [
    {
      id: 1,
      name: 'Spider-Man',
      age: 16,
      superpower: 'Sentido arácnido, agilidad, trepar muros',
      nickname: 'Spidey',
      universe: 'Marvel',
      image: 'assets/spiderman.png'
    },
    {
      id: 2,
      name: 'Batman',
      age: 35,
      superpower: 'Detective, artes marciales, gadgets',
      nickname: 'El Caballero Oscuro',
      universe: 'DC',
      image: 'assets/batman.png'
    },
    {
      id: 3,
      name: 'Wonder Woman',
      age: 28,
      superpower: 'Fuerza sobrehumana, lazo de la verdad, vuelo',
      nickname: 'Diana',
      universe: 'DC',
      image: 'assets/wonderwoman.png'
    },
    {
      id: 4,
      name: 'Iron Man',
      age: 40,
      superpower: 'Armadura tecnológica, genio inventor',
      nickname: 'Tony',
      universe: 'Marvel',
      image: 'assets/ironman.png'
    },
    {
      id: 5,
      name: 'Superman',
      age: 32,
      superpower: 'Vuelo, superfuerza, visión láser',
      nickname: 'Clark',
      universe: 'DC',
      image: 'assets/superman.png'
    },
    {
      id: 6,
      name: 'Hulk',
      age: 40,
      superpower: 'Fuerza ilimitada, regeneración',
      nickname: 'El Gigante Esmeralda',
      universe: 'Marvel',
      image: 'assets/hulk.png'
    },
    {
      id: 7,
      name: 'Black Widow',
      age: 32,
      superpower: 'Espionaje, artes marciales, agilidad',
      nickname: 'Natasha',
      universe: 'Marvel',
      image: 'assets/blackwidow.png'
    }
  ];

  selectedIndex = 0;

  get selectedSuperhero(): ISuperhero {
    return this.superheroes[this.selectedIndex];
  }

  prev() {
    this.selectedIndex = (this.selectedIndex - 1 + this.superheroes.length) % this.superheroes.length;
  }

  next() {
    this.selectedIndex = (this.selectedIndex + 1) % this.superheroes.length;
  }

  selectSuperhero(index: number) {
    this.selectedIndex = index;
  }
}
