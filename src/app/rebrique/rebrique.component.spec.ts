import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebriqueComponent } from './rebrique.component';

describe('RebriqueComponent', () => {
  let component: RebriqueComponent;
  let fixture: ComponentFixture<RebriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
