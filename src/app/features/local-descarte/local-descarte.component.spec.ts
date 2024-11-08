import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDescarteComponent } from './local-descarte.component';

describe('LocalDescarteComponent', () => {
  let component: LocalDescarteComponent;
  let fixture: ComponentFixture<LocalDescarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalDescarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
