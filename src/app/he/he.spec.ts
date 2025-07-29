import { ComponentFixture, TestBed } from '@angular/core/testing';

import { He } from './he';

describe('He', () => {
  let component: He;
  let fixture: ComponentFixture<He>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [He]
    })
    .compileComponents();

    fixture = TestBed.createComponent(He);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
