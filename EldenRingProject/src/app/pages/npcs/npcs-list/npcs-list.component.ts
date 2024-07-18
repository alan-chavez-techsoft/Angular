import { Component, OnInit } from '@angular/core';
import { NpcEntity } from '../../../entities/npcs/npcAPIResponse';
import { NpcsService } from '../../../../shared/services/npcs.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-npcs-list',
  standalone: false,
  templateUrl: './npcs-list.component.html',
  styleUrl: './npcs-list.component.css'
})
export class NpcsListComponent implements OnInit{
  npcsList:NpcEntity[] = [];
  constructor(private npcService: NpcsService, private router: Router) {}
  ngOnInit(): void {
    this.npcService.getAll().subscribe(n=> {
        n.data.forEach((npc:NpcEntity) => {
          this.npcService.getNpcDetails(npc.name).subscribe(d =>{
          npc.name = d;
         });
      });
      this.npcsList = n.data;
    })
  }
}
