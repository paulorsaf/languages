import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrectSpellingPopoverComponent } from './correct-spelling-popover.component';

describe('CorrectSpellingPopoverComponent', () => {
  let component: CorrectSpellingPopoverComponent;
  let fixture: ComponentFixture<CorrectSpellingPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectSpellingPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrectSpellingPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
