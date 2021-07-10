/**
 * Help Module
 *
 * This module providers the modules, components, directives and pipes
 * to integrate help into the apps.
 */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components, Directive, Services and Pipes Import
/* tslint:disable:max-line-length */
import { HelpButtonComponent } from './button/help-button.component';
import { HelpDirective } from './directive/help.directive';
import { HelpService } from './service/help.service';
/* tslint:enable:max-line-length */

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HelpButtonComponent,
    HelpDirective,
  ],
  declarations: [
    HelpButtonComponent,
    HelpDirective
  ]
})

export class HelpModule {

  static forRoot(): ModuleWithProviders<HelpModule> {
    return {ngModule: HelpModule, providers: [HelpService]};
  }

}

export { HelpService } from './service/help.service';
