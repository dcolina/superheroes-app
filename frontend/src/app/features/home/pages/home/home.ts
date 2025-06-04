import { Component } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { FooterNav } from '../../../../shared/components/footer-nav/footer-nav';
import { SuperheroCarousel } from '../../../superheroes/components/superhero-carousel/superhero-carousel';

@Component({
  selector: 'app-home',
  imports: [Header, FooterNav, SuperheroCarousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
