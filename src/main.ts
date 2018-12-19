import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// speech-angular

import { NuanceModule } from 'speech-angular';


// Nuance-Credentials

// TODO: Hier muessen die echten Zugangsdaten eingetragen werden
import { APP_ID, APP_KEY, NLU_TAG } from './config/nuance-credentials';
// import { APP_ID, APP_KEY, NLU_TAG } from './config/nuance-credentials.default';
const nuanceOption = {
  nuanceAppId: APP_ID,
  nuanceAppKey: APP_KEY,
  nuanceNluTag: NLU_TAG
};


// Initialisierung des Nuance Cloud-Service

NuanceModule.init( nuanceOption, (aNuanceFlag: boolean) => {
  console.log( '===> Nuance:', aNuanceFlag);

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

});


