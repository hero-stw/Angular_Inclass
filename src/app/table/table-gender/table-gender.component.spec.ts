import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGenderComponent } from './table-gender.component';

describe('TableGenderComponent', () => {
  let component: TableGenderComponent;
  let fixture: ComponentFixture<TableGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
