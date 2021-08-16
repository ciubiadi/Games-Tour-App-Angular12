import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      { id: 11, name: 'Forza Horizon 5'},
      { id: 12, name: 'Smite'},
      { id: 13, name: 'Dirt 3'},
      { id: 14, name: 'Euro Truck Simulator'},
      { id: 15, name: 'World Of Warcraft'},
      { id: 16, name: 'Warcraft 2'},
      { id: 17, name: 'Halo 2'},
      { id: 18, name: 'Fifa 21'},
      { id: 19, name: 'Need For Speed: Heat'},
      { id: 20, name: 'Among Us'},
      { id: 21, name: 'Valorant'},
      { id: 22, name: 'Pleague Inc.'},
      { id: 23, name: 'Spellbreak'},
      { id: 24, name: 'Spiderman 2'},
      { id: 25, name: 'Chicken Invaders 5'},
    ];
    return {games};
  }

  genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 11;
  }

  constructor() { }
}
