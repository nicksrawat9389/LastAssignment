import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonWorkingComponent } from './person-working.component';

describe('PersonWorkingComponent', () => {
  let component: PersonWorkingComponent;
  let fixture: ComponentFixture<PersonWorkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonWorkingComponent]
    });
    fixture = TestBed.createComponent(PersonWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
