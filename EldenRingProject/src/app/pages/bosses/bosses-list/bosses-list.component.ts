import { Component, OnInit } from '@angular/core';
import { BossesService } from '../../../../shared/services/bosses.service';
import { Router } from '@angular/router';
import { BossEntity } from '../../../entities/bosses/bossEntity';

@Component({
  selector: 'app-bosses-list',
  standalone: false,
  templateUrl: './bosses-list.component.html',
  styleUrl: './bosses-list.component.css'
})
export class BossesListComponent implements OnInit{
  bossesList:BossEntity[] = [];
  constructor(private bossService: BossesService, private router: Router) {}
  ngOnInit(): void {
    this.bossService.getAll().subscribe(b=> {
        b.data.forEach((boss:BossEntity) => {
          this.bossService.getBossDetails(boss.name).subscribe(d =>{
          boss.name = d;
         });
      });
      this.bossesList = b.data;
    })
  }

  redirectToDetails(bossId: number) {
    this.router.navigate(['boss-details', bossId]);
  }
}
