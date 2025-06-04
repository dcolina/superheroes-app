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
      superpower: 'Sentido arácnido',
      nickname: 'Spidey',
      universe: 'Marvel',
      image: 'https://static.wikia.nocookie.net/marveldatabase/images/0/0c/Peter_Parker_%28Earth-616%29_from_Spider-Man_Vol_1_1.png'
    },
    {
      id: 2,
      name: 'Batman',
      age: 35,
      superpower: 'Detective, gadgets',
      nickname: 'El Caballero Oscuro',
      universe: 'DC',
      image: 'https://static.wikia.nocookie.net/batman/images/8/8a/Batman_Bruce_Wayne_0012.jpg'
    },
    {
      id: 3,
      name: 'Wonder Woman',
      age: 28,
      superpower: 'Fuerza y lazo mágico',
      nickname: 'Diana',
      universe: 'DC',
      image: 'https://static.wikia.nocookie.net/marvel_dc/images/7/7e/Wonder_Woman_0012.jpg'
    },
    {
      id: 4,
      name: 'Iron Man',
      age: 40,
      superpower: 'Armadura tecnológica',
      nickname: 'Tony',
      universe: 'Marvel',
      image: 'https://static.wikia.nocookie.net/marveldatabase/images/6/6a/Tony_Stark_%28Earth-616%29_from_Invincible_Iron_Man_Vol_1_1.png'
    },
    {
      id: 5,
      name: 'Superman',
      age: 32,
      superpower: 'Vuelo, superfuerza',
      nickname: 'Clark',
      universe: 'DC',
      image: 'https://static.wikia.nocookie.net/marvel_dc/images/6/6e/Superman_0012.jpg'
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
