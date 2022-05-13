import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPaneComponent } from './display-pane.component';

describe('DisplayPaneComponent', () => {
  let component: DisplayPaneComponent;
  let fixture: ComponentFixture<DisplayPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
