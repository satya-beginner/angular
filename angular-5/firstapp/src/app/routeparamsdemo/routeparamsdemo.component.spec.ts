import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteparamsdemoComponent } from './routeparamsdemo.component';

describe('RouteparamsdemoComponent', () => {
  let component: RouteparamsdemoComponent;
  let fixture: ComponentFixture<RouteparamsdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteparamsdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteparamsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
