import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from 'boardgame.io/react';
import { Debug } from 'boardgame.io/debug';

import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';
import { SocketIO } from 'boardgame.io/multiplayer'

// const TicTacToeClient = Client({
//   game: TicTacToe,
//   board: TicTacToeBoard,
//   multiplayer: SocketIO({ server: 'localhost:8000' }),
// });

class TicTacToeClient {
  constructor() {
    this.client = Client({ game: TicTacToe });
    this.client.start();
  }
}

var App = Client({ 
  game: TicTacToe, 
  board: TicTacToeBoard,
  debug: false
});
export default App;
