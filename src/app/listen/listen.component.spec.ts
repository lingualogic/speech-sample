import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HelpModule, HelpService } from './../help/help.module';

import { ListenComponent } from './listen.component';
import { ListenEditorComponent } from './../listen-editor/listen-editor.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('ListenComponent', () => {
  let component: ListenComponent;
  let fixture: ComponentFixture<ListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListenComponent,
        ListenEditorComponent,
        NavbarComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [ HelpService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
