import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeonElementComponent } from './accordeon-element.component';

describe('AccordeonElementComponent', () => {
  let component: AccordeonElementComponent;
  let fixture: ComponentFixture<AccordeonElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordeonElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordeonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
