import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HelpModule, HelpService } from './../help/help.module';

import { CloudComponent } from './cloud.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { NuanceComponent } from './../nuance/nuance.component';


describe('CloudComponent', () => {
    let component: CloudComponent;
    let fixture: ComponentFixture<CloudComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CloudComponent,
                NavbarComponent,
                NuanceComponent
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
        fixture = TestBed.createComponent(CloudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
