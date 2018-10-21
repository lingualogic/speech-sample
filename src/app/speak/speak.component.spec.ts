import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SpeakComponent } from './speak.component';

import { SpeakEditorComponent } from './../speak-editor/speak-editor.component';


describe('SpeakComponent', () => {
  let component: SpeakComponent;
  let fixture: ComponentFixture<SpeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpeakComponent,
        SpeakEditorComponent
      ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
