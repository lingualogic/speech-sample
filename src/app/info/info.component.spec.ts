import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HelpModule, HelpService } from './../help/help.module';

import { InfoComponent } from './info.component';
import { NavbarComponent } from './../navbar/navbar.component';


describe('InfoComponent', () => {

    let component: InfoComponent;
    let fixture: ComponentFixture<InfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                InfoComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                HelpModule
            ],
            providers: [ HelpService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
