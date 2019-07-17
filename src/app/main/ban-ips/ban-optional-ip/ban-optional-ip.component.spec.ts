import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanOptionalIpComponent } from './ban-optional-ip.component';

describe('BanOptionalIpComponent', () => {
  let component: BanOptionalIpComponent;
  let fixture: ComponentFixture<BanOptionalIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanOptionalIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanOptionalIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
