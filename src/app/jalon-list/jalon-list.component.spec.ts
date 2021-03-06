import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JalonListComponent } from './jalon-list.component';

describe('JalonListComponent', () => {
  let component: JalonListComponent;
  let fixture: ComponentFixture<JalonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JalonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JalonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
