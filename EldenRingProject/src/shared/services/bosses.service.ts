import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BossAPIResponse } from "../../app/entities/bosses/bossAPIResponse";
const baseUrl:string = "https://eldenring.fanapis.com/api/bosses";

@Injectable({
    providedIn: 'root'
})

export class BossesService {
    constructor(private http:HttpClient) {}

    public getAll(){
      return this.http.get<BossAPIResponse>(`${baseUrl}`);
    }
    public getBossDetails(url:string){
      return this.http.get<any>(url);
    }
    public getbyId(id: string) {
      return this.http.get<BossAPIResponse>(`${baseUrl}/${id}`);
    }
}