import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from './game';
import { GAMES } from './mock-games';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private messageService: MessageService) {}

  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    this.messageService.add('GameService: fetched games');
    return games;
  }
}
