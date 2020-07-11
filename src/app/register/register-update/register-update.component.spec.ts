import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUpdateComponent } from './register-update.component';

describe('RegisterUpdateComponent', () => {
  let component: RegisterUpdateComponent;
  let fixture: ComponentFixture<RegisterUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
