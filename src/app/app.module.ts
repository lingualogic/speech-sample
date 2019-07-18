import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Feature-Module

import { HelpModule } from './help/help.module';

// Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { ListenComponent } from './listen/listen.component';
import { IntentComponent } from './intent/intent.component';
import { SpeakComponent } from './speak/speak.component';
import { FooterComponent } from './footer/footer.component';

import { AnimateDirective } from './animate/animate.directive';

import { ShowButtonComponent } from './show-button/show-button.component';

import { BotComponent } from './bot/bot.component';
import { PlaygroundComponent } from './playground/playground.component';
import { DesignerComponent } from './designer/designer.component';
import { DialogComponent } from './dialog/dialog.component';

import { BotEditorComponent } from './bot-editor/bot-editor.component';
import { SpeakEditorComponent } from './speak-editor/speak-editor.component';
import { InfoComponent } from './info/info.component';
import { ActionComponent } from './action/action.component';

import { VoiceEditorComponent } from './voice-editor/voice-editor.component';
import { ListenEditorComponent } from './listen-editor/listen-editor.component';
import { CloudComponent } from './cloud/cloud.component';
import { NuanceComponent } from './nuance/nuance.component';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { RasaComponent } from './rasa/rasa.component';
import { IntentEditorComponent } from './intent-editor/intent-editor.component';
import { AppLocaleService } from './app-locale.service';


// speech-angular

import {
    SpeakService,
    ActionService,
    ListenService,
    IntentService,
    BotService,
    NuanceService,
    AmazonService,
    GoogleService,
    MicrosoftService,
    RasaService
} from 'speech-angular';
import { IntentMixnluComponent } from './intent-mixnlu/intent-mixnlu.component';
import { IntentDialogflowComponent } from './intent-dialogflow/intent-dialogflow.component';


const localeID = 'de';
// const localeID = 'en';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ListenComponent,
        IntentComponent,
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
        ActionComponent,
        VoiceEditorComponent,
        ListenEditorComponent,
        CloudComponent,
        NuanceComponent,
        AmazonComponent,
        GoogleComponent,
        MicrosoftComponent,
        RasaComponent,
        IntentEditorComponent,
        IntentMixnluComponent,
        IntentDialogflowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HelpModule.forRoot()
    ],
    providers: [
        { provide: LOCALE_ID, useValue: localeID },
        AppLocaleService,
        SpeakService,
        ActionService,
        ListenService,
        IntentService,
        BotService,
        NuanceService,
        AmazonService,
        GoogleService,
        MicrosoftService,
        RasaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    title: 'Speech Sample';

    constructor() {
        const speakServiceConfig = SpeakService.getConfig();
        speakServiceConfig.audioFilePath = 'assets/speech/audio/polly/';
        speakServiceConfig.errorOutputFlag = true;
        const listenServiceConfig = ListenService.getConfig();
        listenServiceConfig.errorOutputFlag = false;
        const intentServiceConfig = IntentService.getConfig();
        intentServiceConfig.errorOutputFlag = false;
        const botServiceConfig = BotService.getConfig();
        botServiceConfig.errorOutputFlag = false;
        botServiceConfig.dialogFilePath = 'assets/speech/';
    }
}


/**
 * Dient als Klasse fuer SubApps in der WebSite
 */

@NgModule({})
export class SampleSharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: [
                { provide: LOCALE_ID, useValue: localeID },
                AppLocaleService,
                SpeakService,
                ActionService,
                ListenService,
                IntentService,
                BotService,
                NuanceService,
                AmazonService,
                GoogleService,
                MicrosoftService,
                RasaService
            ]
        };
    }
}

