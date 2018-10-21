import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { ListenComponent } from './listen/listen.component';
import { SpeakComponent } from './speak/speak.component';
import { FooterComponent } from './footer/footer.component';

import { AnimateDirective } from './animate/animate.directive';

import { ShowButtonComponent } from './show-button/show-button.component';

import { BotComponent } from './bot/bot.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DesignerComponent } from './designer/designer.component';
import { DialogComponent } from './dialog/dialog.component';

import { SpeakService, ActionService, ListenService, BotService } from 'speech-angular';

import { BotEditorComponent } from './bot-editor/bot-editor.component';
import { SpeakEditorComponent } from './speak-editor/speak-editor.component';
import { InfoComponent } from './info/info.component';
import { ActionComponent } from './action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListenComponent,
    SpeakComponent,
    FooterComponent,
    AnimateDirective,
    ShowButtonComponent,
    BotComponent,
    PlaygroundComponent,
    DesignerComponent,
    DialogComponent,
    BotEditorComponent,
    SpeakEditorComponent,
    InfoComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SpeakService,
    ActionService,
    ListenService,
    BotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  title: 'Speech Sample';

  constructor() {
    const botServiceConfig = BotService.getConfig();
    botServiceConfig.errorOutputFlag = false;
    botServiceConfig.dialogFilePath = 'assets/speech/';
    const speakServiceConfig = SpeakService.getConfig();
    speakServiceConfig.audioFilePath = 'assets/speech/audio/';
    speakServiceConfig.errorOutputFlag = false;
    const listenServiceConfig = ListenService.getConfig();
    listenServiceConfig.errorOutputFlag = false;
  }
}
