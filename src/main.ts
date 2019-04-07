import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// speech-angular

import { AmazonModule, NuanceModule } from 'speech-angular';


// Amazon-Credentials

// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
import { REGION, IDENTITY_POOL_ID } from './../credentials/amazon-credentials';
const amazonOption = {
    amazonDynamicCredentialsFlag: true,
    amazonRegion: REGION,
    amazonIdentityPoolId: IDENTITY_POOL_ID,
    errorOutputFlag: true
};


// Nuance-Credentials

// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
import { APP_ID, APP_KEY, NLU_TAG } from './../credentials/nuance-credentials';
const nuanceOption = {
    nuanceDynamicCredentialsFlag: true,
    nuanceAppId: APP_ID,
    nuanceAppKey: APP_KEY,
    nuanceNluTag: NLU_TAG,
    errorOutputFlag: true
};


// use the require method provided by webpack
// declare const require;
// we use the webpack raw-loader to return the content as a string
// const translations = require(`raw-loader!./locale/messages.en.xlf`);


// Initialisierung des Amazon Cloud-Service

AmazonModule.init( amazonOption, (aAmazonFlag: boolean) => {
    if ( amazonOption && amazonOption.errorOutputFlag ) {
        console.log( '===> Amazon:', aAmazonFlag);
    }
    environment.amazon = aAmazonFlag;
});


// Initialisierung des Nuance Cloud-Service

NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
    if ( nuanceOption && nuanceOption.errorOutputFlag ) {
        console.log( '===> Nuance:', aNuanceFlag);
    }

    environment.nuance = aNuanceFlag;

    if (environment.production) {
        enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule, {
        providers: [
            // {provide: TRANSLATIONS, useValue: translations},
            // {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
        ]
    }).catch(err => console.log(err));

});


