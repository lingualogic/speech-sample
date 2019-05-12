import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { IntentDialogflowComponent } from './intent-dialogflow.component';
import { IntentComponent } from './../intent/intent.component';
import { IntentEditorComponent } from './../intent-editor/intent-editor.component';
import { IntentMixnluComponent } from './../intent-mixnlu/intent-mixnlu.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { Intent } from '../intent/intent';
import { Concept } from '../intent/concept';


xdescribe('IntentDialogflowComponent', () => {
  let component: IntentDialogflowComponent;
  let fixture: ComponentFixture<IntentDialogflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IntentDialogflowComponent,
        IntentComponent,
        IntentEditorComponent,
        IntentMixnluComponent,
        NavbarComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentDialogflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
