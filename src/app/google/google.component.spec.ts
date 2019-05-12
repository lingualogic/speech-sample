import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { GoogleComponent } from './google.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('GoogleComponent', () => {

    let component: GoogleComponent;
    let fixture: ComponentFixture<GoogleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GoogleComponent, NavbarComponent ],
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
        fixture = TestBed.createComponent(GoogleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
