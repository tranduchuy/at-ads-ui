import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoBlockingRangeIpsComponent } from './auto-blocking-range-ips.component';

describe('AutoBlockingRangeIpsComponent', () => {
  let component: AutoBlockingRangeIpsComponent;
  let fixture: ComponentFixture<AutoBlockingRangeIpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoBlockingRangeIpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoBlockingRangeIpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
