import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScoreboardComponent } from './my-scoreboard.component';

describe('MyScoreboardComponent', () => {
  let component: MyScoreboardComponent;
  let fixture: ComponentFixture<MyScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
