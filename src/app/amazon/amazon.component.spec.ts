import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

import { HelpModule, HelpService } from './../help/help.module';

import { AmazonComponent } from './amazon.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('AmazonComponent', () => {

    let component: AmazonComponent;
    let fixture: ComponentFixture<AmazonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AmazonComponent, NavbarComponent ],
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
        fixture = TestBed.createComponent(AmazonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
