import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanDeviceComponent } from './ban-device.component';

describe('BanDeviceComponent', () => {
  let component: BanDeviceComponent;
  let fixture: ComponentFixture<BanDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
