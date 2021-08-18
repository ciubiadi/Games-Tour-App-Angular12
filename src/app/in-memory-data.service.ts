import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const games = [
      {
        id: 1,
        name: 'League Of Legends',
        online: true,
        releaseDate: '23-05-2010',
        desiredName: ''
      },
      {
        id: 2,
        name: 'CS:GO',
        online: true,
        releaseDate: '',
        desiredName: ''
      },
      {
        id: 3,
        name: 'Need For Speed Most Wanted 2',
        online: false,
        releaseDate: '12-07-2005',
        desiredName: ''
      },
      {
        id: 4,
        name: 'PUBG',
        online: true,
        releaseDate: '11-08-2015',
        desiredName: ''
      },
      {
        id: 5,
        name: 'The Witcher',
        online: false,
        releaseDate: '02-02-2007',
        desiredName: ''
      },
      {
        id: 6,
        name: 'DOTA 2',
        online: true,
        releaseDate: '03-05-2010',
        desiredName: ''
      },
      {
        id: 7,
        name: 'Max Payne 2',
        online: false,
        releaseDate: '22-12-2005',
        desiredName: ''
      },
      {
        id: 8,
        name: 'Max Payne 3',
        online: true,
        releaseDate: '09-12-2000',
        desiredName: ''
      },
      {
        id: 9,
        name: 'Call Of Duty: Warzone',
        online: true,
        releaseDate: '12-07-2017',
        desiredName: ''
      },
      {
        id: 10,
        name: 'Fortnite',
        online: true,
        releaseDate: '05-05-2005',
        desiredName: ''
      },
      {
        id: 11,
        name: 'Apex Legends',
        online: true,
        releaseDate: '18-10-2018',
        desiredName: ''
      },
      { id: 11, name: 'Forza Horizon 5'},
      { id: 12, name: 'Smite'},
      { id: 13, name: 'Dirt 3'},
      { id: 14, name: 'Euro Truck Simulator'},
      { id: 15, name: 'World Of Warcraft'},
      { id: 16, name: 'Warcraft 2'},
      { id: 17, name: 'Halo 2'},
      { id: 18, name: 'Fifa 21'},
      { id: 19, name: 'Need For Speed: Carbon'},
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
