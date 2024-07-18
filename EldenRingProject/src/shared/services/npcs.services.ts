import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NpcAPIResponse } from "../../app/entities/npcs/npcEntity";
const baseUrl:string = "https://eldenring.fanapis.com/api/npcs";

@Injectable({
    providedIn: 'root'
})

export class NpcsService {
    constructor(private http:HttpClient) {}

    public getAll(){
      return this.http.get<NpcAPIResponse>(`${baseUrl}`);
    }
    public getNpcDetails(url:string){
      return this.http.get<any>(url);
    }
    public getbyId(id: number) {
      return this.http.get<NpcAPIResponse>(`${baseUrl}/${id}`);
    }
}