import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectWhatsAppPage } from './direct-whats-app.page';

describe('DirectWhatsAppPage', () => {
  let component: DirectWhatsAppPage;
  let fixture: ComponentFixture<DirectWhatsAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectWhatsAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
