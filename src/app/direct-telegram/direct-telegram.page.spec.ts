import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectTelegramPage } from './direct-telegram.page';

describe('DirectTelegramPage', () => {
  let component: DirectTelegramPage;
  let fixture: ComponentFixture<DirectTelegramPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectTelegramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
