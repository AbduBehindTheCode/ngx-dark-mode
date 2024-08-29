import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDarkModeComponent } from './ngx-dark-mode.component';

describe('NgxDarkModeComponent', () => {
  let component: NgxDarkModeComponent;
  let fixture: ComponentFixture<NgxDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDarkModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
