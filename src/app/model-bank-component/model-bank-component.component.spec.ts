import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBankComponentComponent } from './model-bank-component.component';

describe('ModelBankComponentComponent', () => {
  let component: ModelBankComponentComponent;
  let fixture: ComponentFixture<ModelBankComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBankComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
