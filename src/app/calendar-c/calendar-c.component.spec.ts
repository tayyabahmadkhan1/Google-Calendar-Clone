import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarCComponent } from './calendar-c.component';

describe('CalendarCComponent', () => {
  let component: CalendarCComponent;
  let fixture: ComponentFixture<CalendarCComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
