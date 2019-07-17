import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanOptionalIPComponent } from './ban-optional-ip.component';

describe('BanOptionalIpComponent', () => {
  let component: BanOptionalIPComponent;
  let fixture: ComponentFixture<BanOptionalIPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanOptionalIPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanOptionalIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
