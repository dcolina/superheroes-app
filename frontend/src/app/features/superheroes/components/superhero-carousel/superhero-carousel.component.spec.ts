import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroCarouselComponent } from './superhero-carousel.component';

describe('SuperheroCarouselComponent', () => {
  let component: SuperheroCarouselComponent;
  let fixture: ComponentFixture<SuperheroCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
