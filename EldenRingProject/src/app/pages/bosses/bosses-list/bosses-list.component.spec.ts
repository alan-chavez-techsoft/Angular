import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesListComponent } from './bosses-list.component';

describe('BossesListComponent', () => {
  let component: BossesListComponent;
  let fixture: ComponentFixture<BossesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BossesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
