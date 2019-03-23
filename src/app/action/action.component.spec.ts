import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HelpModule, HelpService } from './../help/help.module';

import { ActionComponent } from './action.component';
import { ShowButtonComponent } from './../show-button/show-button.component';
import { NavbarComponent } from './../navbar/navbar.component';


    describe('ActionComponent', () => {
    let component: ActionComponent;
    let fixture: ComponentFixture<ActionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ActionComponent,
                ShowButtonComponent,
                NavbarComponent
            ],
            imports: [
                RouterTestingModule,
                FormsModule,
                HelpModule
            ],
            providers: [ HelpService ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
