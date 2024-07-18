export interface BossEntity{
    id: number,
    name: string,
    image?: string,
    region: string,
    description: string,
    location: string,
    drops: string[],
    healthPoints: string
}