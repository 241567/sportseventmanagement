import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportsComponent } from './add-sports.component';

describe('AddSportsComponent', () => {
  let component: AddSportsComponent;
  let fixture: ComponentFixture<AddSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
