import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveComponent } from './retrieve.component';

describe('RetrieveComponent', () => {
  let component: RetrieveComponent;
  let fixture: ComponentFixture<RetrieveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrieveComponent]
    });
    fixture = TestBed.createComponent(RetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
