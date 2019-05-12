import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentMixnluComponent } from './intent-mixnlu.component';

xdescribe('IntentMixnluComponent', () => {
  let component: IntentMixnluComponent;
  let fixture: ComponentFixture<IntentMixnluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentMixnluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentMixnluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
