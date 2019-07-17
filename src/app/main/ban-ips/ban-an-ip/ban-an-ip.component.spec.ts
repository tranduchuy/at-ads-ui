import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanAnIpComponent } from './ban-an-ip.component';

describe('BanAnIpComponent', () => {
  let component: BanAnIpComponent;
  let fixture: ComponentFixture<BanAnIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanAnIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanAnIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
