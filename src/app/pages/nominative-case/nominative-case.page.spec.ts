import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NominativeCasePage } from './nominative-case.page';

describe('NominativeCasePage', () => {
  let component: NominativeCasePage;
  let fixture: ComponentFixture<NominativeCasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NominativeCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
