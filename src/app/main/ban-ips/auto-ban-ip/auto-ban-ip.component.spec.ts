import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBanIpComponent } from './auto-ban-ip.component';

describe('AutoBanIpComponent', () => {
  let component: AutoBanIpComponent;
  let fixture: ComponentFixture<AutoBanIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoBanIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoBanIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
