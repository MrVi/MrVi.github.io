import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiItemComponent } from './wifi-item.component';

describe('WifiItemComponent', () => {
  let component: WifiItemComponent;
  let fixture: ComponentFixture<WifiItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
