import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentRasaNluComponent } from './intent-rasa-nlu.component';

xdescribe('IntentRasaNluComponent', () => {
  let component: IntentRasaNluComponent;
  let fixture: ComponentFixture<IntentRasaNluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentRasaNluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentRasaNluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
