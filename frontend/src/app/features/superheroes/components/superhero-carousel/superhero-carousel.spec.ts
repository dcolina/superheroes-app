import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroCarousel } from './superhero-carousel';

describe('SuperheroCarousel', () => {
  let component: SuperheroCarousel;
  let fixture: ComponentFixture<SuperheroCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
