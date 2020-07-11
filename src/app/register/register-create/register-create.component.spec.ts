import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCreateComponent } from './register-create.component';

describe('RegisterCreateComponent', () => {
  let component: RegisterCreateComponent;
  let fixture: ComponentFixture<RegisterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
