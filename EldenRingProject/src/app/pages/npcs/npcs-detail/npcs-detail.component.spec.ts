import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcsDetailComponent } from './npcs-detail.component';

describe('NpcsDetailComponent', () => {
  let component: NpcsDetailComponent;
  let fixture: ComponentFixture<NpcsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpcsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NpcsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
