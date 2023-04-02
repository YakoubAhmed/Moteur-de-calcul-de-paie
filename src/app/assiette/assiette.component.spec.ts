import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssietteComponent } from './assiette.component';

describe('AssietteComponent', () => {
  let component: AssietteComponent;
  let fixture: ComponentFixture<AssietteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssietteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssietteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
