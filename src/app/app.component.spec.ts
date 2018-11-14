import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { SpeakComponent } from './speak/speak.component';
import { ListenComponent } from './listen/listen.component';
import { ActionComponent } from './action/action.component';
import { DesignerComponent } from './designer/designer.component';
import { PlaygroundComponent } from './playground/playground.component';
import { SpeakEditorComponent } from './speak-editor/speak-editor.component';
import { ShowButtonComponent } from './show-button/show-button.component';
import { DialogComponent } from './dialog/dialog.component';
import { BotComponent } from './bot/bot.component';
import { BotEditorComponent } from './bot-editor/bot-editor.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        InfoComponent,
        SpeakComponent,
        ListenComponent,
        ActionComponent,
        DesignerComponent,
        PlaygroundComponent,
        SpeakEditorComponent,
        ShowButtonComponent,
        DialogComponent,
        BotComponent,
        BotEditorComponent
      ],
      imports: [
        FormsModule,
        AppRoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

});