import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { RasaComponent } from './rasa.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('RasaComponent', () => {

    let component: RasaComponent;
    let fixture: ComponentFixture<RasaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RasaComponent, NavbarComponent ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HelpModule
            ],
            providers: [ HelpService, {provide: APP_BASE_HREF, useValue : '/' }]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RasaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
