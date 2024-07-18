import { BossEntity } from "./bossEntity";

export interface BossAPIResponse {
    succes: boolean,
    count: number,
    total: number,
    data: BossEntity[]
}