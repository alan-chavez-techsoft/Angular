import { NpcEntity } from "./npcAPIResponse";

export interface NpcAPIResponse {
    succes: boolean,
    count: number,
    total: number,
    data: NpcEntity[]
}