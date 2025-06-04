import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroThumbnail } from './superhero-thumbnail';

describe('SuperheroThumbnail', () => {
  let component: SuperheroThumbnail;
  let fixture: ComponentFixture<SuperheroThumbnail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroThumbnail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperheroThumbnail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
