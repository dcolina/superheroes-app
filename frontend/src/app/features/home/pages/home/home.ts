import { Component } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { SuperheroCarousel } from '../../../superheroes/components/superhero-carousel/superhero-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, SuperheroCarousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
