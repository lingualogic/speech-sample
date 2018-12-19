import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { VoiceEditorComponent } from './voice-editor.component';

describe('VoiceEditorComponent', () => {
  let component: VoiceEditorComponent;
  let fixture: ComponentFixture<VoiceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceEditorComponent ],
      imports: [
        FormsModule
      ]
   })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
