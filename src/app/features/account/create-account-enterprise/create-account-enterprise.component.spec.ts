import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountEnterpriseComponent } from './create-account-enterprise.component';

describe('CreateAccountEnterpriseComponent', () => {
  let component: CreateAccountEnterpriseComponent;
  let fixture: ComponentFixture<CreateAccountEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountEnterpriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
