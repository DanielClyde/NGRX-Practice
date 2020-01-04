import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLcrComponent } from './my-lcr.component';

describe('MyLcrComponent', () => {
  let component: MyLcrComponent;
  let fixture: ComponentFixture<MyLcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
