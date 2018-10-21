import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent} from './info/info.component';
import { SpeakComponent } from './speak/speak.component';
import { ListenComponent } from './listen/listen.component';
import { ActionComponent } from './action/action.component';
import { DesignerComponent } from './designer/designer.component';
import { PlaygroundComponent } from './playground/playground.component';


const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'speak', component: SpeakComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'action', component: ActionComponent },
  { path: 'bot', component: DesignerComponent },
  { path: 'designer', component: DesignerComponent },
  { path: 'playground', component: PlaygroundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
