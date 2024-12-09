import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerbSpellingPage } from './verb-spelling.page';

describe('VerbSpellingPage', () => {
  let component: VerbSpellingPage;
  let fixture: ComponentFixture<VerbSpellingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbSpellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
