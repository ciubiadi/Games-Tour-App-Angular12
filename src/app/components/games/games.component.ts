import { Component, OnInit } from '@angular/core';

import { Game } from '../../game';
import { GameService } from '../../game.service';
// import { MessageService } from '../../message.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  // selectedGame?: Game;

  constructor(
    private gameService: GameService
    // private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getGames();
  }

  // onSelect(game: Game): void {
  //   this.selectedGame = game;
  //   this.messageService.add(`GamesComponent: Selected game id=${game.id}`);
  // }

  getGames(): void {
    this.gameService.getGames().subscribe(games => (this.games = games));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.gameService.addGame({ name } as Game)
      .subscribe(game => {
        this.games.push(game);
      });
  }

  delete(game: Game): void {
    this.games = this.games.filter(g => g !== game);
    this.gameService.deleteGame(game.id).subscribe();
  }
}
