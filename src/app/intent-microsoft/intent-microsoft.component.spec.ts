import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentMicrosoftComponent } from './intent-microsoft.component';

xdescribe('IntentMicrosoftComponent', () => {
  let component: IntentMicrosoftComponent;
  let fixture: ComponentFixture<IntentMicrosoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentMicrosoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentMicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
