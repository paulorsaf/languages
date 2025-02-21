import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenitiveCasePage } from './genitive-case.page';

describe('GenitiveCasePage', () => {
  let component: GenitiveCasePage;
  let fixture: ComponentFixture<GenitiveCasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenitiveCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
