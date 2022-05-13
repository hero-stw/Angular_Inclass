import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNameComponent } from './table-name.component';

describe('TableNameComponent', () => {
  let component: TableNameComponent;
  let fixture: ComponentFixture<TableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
