import { ComponentFixture, TestBed } from '@angular/core/testing';

import { She } from './she';

describe('She', () => {
  let component: She;
  let fixture: ComponentFixture<She>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [She]
    })
    .compileComponents();

    fixture = TestBed.createComponent(She);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
