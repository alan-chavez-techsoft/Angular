import { Component, OnInit } from '@angular/core';
import { BossesService } from '../../../../shared/services/bosses.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bosses-detail',
  standalone: true,
  templateUrl: './bosses-detail.component.html',
  styleUrl: './bosses-detail.component.css'
})
export class BossesDetailComponent implements OnInit{
  //boss:BossEntity;

  constructor(private bossService:BossesService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    //this.bossService.getbyId(this.route.snapshot.paramMap.get('id'))
  }

}
