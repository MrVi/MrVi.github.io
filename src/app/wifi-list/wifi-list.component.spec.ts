import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiListComponent } from './wifi-list.component';

describe('WifiListComponent', () => {
  let component: WifiListComponent;
  let fixture: ComponentFixture<WifiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
