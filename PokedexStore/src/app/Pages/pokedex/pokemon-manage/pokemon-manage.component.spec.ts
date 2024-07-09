import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonManageComponent } from './pokemon-manage.component';

describe('PokemonManageComponent', () => {
  let component: PokemonManageComponent;
  let fixture: ComponentFixture<PokemonManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
