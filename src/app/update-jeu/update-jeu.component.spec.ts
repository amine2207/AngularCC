import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJeuComponent } from './update-jeu.component';

describe('UpdateJeuComponent', () => {
  let component: UpdateJeuComponent;
  let fixture: ComponentFixture<UpdateJeuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJeuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
