import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ListenComponent } from './listen.component';

describe('ListenComponent', () => {
  let component: ListenComponent;
  let fixture: ComponentFixture<ListenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenComponent ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
