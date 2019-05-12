import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent} from './info/info.component';
import { SpeakComponent } from './speak/speak.component';
import { ListenComponent } from './listen/listen.component';
import { IntentComponent } from './intent/intent.component';
import { ActionComponent } from './action/action.component';
import { DesignerComponent } from './designer/designer.component';
import { PlaygroundComponent } from './playground/playground.component';

import { CloudComponent} from './cloud/cloud.component';
import { NuanceComponent} from './nuance/nuance.component';
import { AmazonComponent } from './amazon/amazon.component';
import { GoogleComponent } from './google/google.component';


const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'speak', component: SpeakComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'intent', component: IntentComponent },
  { path: 'action', component: ActionComponent },
  { path: 'bot', component: DesignerComponent },
  { path: 'designer', component: DesignerComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'nuance', component: NuanceComponent },
  { path: 'amazon', component: AmazonComponent },
  { path: 'google', component: GoogleComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
