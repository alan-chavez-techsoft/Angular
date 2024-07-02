import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokename',
  standalone: false,
  pure:true
})
export class PokenamePipe implements PipeTransform {

    pokemonNamesWithJapanese:any[] = [
      { name: 'Turtwig', japaneseName: 'ナエトル' },
      { name: 'Grotle', japaneseName: 'ハヤシガメ' },
      { name: 'Torterra', japaneseName: 'ドダイトス' },
      { name: 'Chimchar', japaneseName: 'ヒコザル' },
      { name: 'Monferno', japaneseName: 'モウカザル' },
      { name: 'Infernape', japaneseName: 'ゴウカザル' },
      { name: 'Piplup', japaneseName: 'ポッチャマ' },
      { name: 'Prinplup', japaneseName: 'ポッタイシ' },
      { name: 'Empoleon', japaneseName: 'エンペルト' }
    ];
  transform(value:string): string {
    // this.pokemonNamesWithJapanese.map(p=>{
    //   if(p.ingles === value){
    //     return p.japaneseName;
    //   }
    //   return p.name;
    // })
    // return null;

    var japoName = this.pokemonNamesWithJapanese.find(p=> value.toLowerCase() === p.name.toLowerCase())
    if(japoName!=null){
      return japoName.japaneseName
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
