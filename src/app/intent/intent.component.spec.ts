import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IntentComponent } from './intent.component';
import { VoiceEditorComponent } from './../voice-editor/voice-editor.component';


describe('IntentComponent', () => {
  let component: IntentComponent;
  let fixture: ComponentFixture<IntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IntentComponent,
        VoiceEditorComponent
      ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( IntentComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect( component ).toBeTruthy();
  });
});
