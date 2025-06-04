import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroCard } from './superhero-card';

describe('SuperheroCard', () => {
  let component: SuperheroCard;
  let fixture: ComponentFixture<SuperheroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
