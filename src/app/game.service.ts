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

  getGame(id: number): Observable<Game> {
    // For now, assume that a game with the specified `id` always exists.
    // Error handling will be added later.
    const game = GAMES.find(h => h.id === id)!;
    this.messageService.add(`GameService: fetched game id=${id}`);
    return of(game);
  }

  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    this.messageService.add('GameService: fetched games');
    return games;
  }
}
