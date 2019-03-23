import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { IntentEditorComponent } from './intent-editor.component';

describe('IntentEditorComponent', () => {

    let component: IntentEditorComponent;
    let fixture: ComponentFixture<IntentEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IntentEditorComponent ],
            imports: [
                FormsModule
            ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntentEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
