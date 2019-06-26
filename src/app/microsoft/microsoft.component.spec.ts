import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { MicrosoftComponent } from './microsoft.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('MicroaoftComponent', () => {

    let component: MicrosoftComponent;
    let fixture: ComponentFixture<MicrosoftComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MicrosoftComponent, NavbarComponent ],
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
        fixture = TestBed.createComponent(MicrosoftComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
