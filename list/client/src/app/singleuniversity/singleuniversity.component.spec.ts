import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleuniversityComponent } from './singleuniversity.component';

describe('SingleuniversityComponent', () => {
  let component: SingleuniversityComponent;
  let fixture: ComponentFixture<SingleuniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleuniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
