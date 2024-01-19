import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStatementExampleComponent } from './control-statement-example.component';

describe('ControlStatementExampleComponent', () => {
  let component: ControlStatementExampleComponent;
  let fixture: ComponentFixture<ControlStatementExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlStatementExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlStatementExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
