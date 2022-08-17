class MySolution {
  board: Array<any>;
  constructor(value: Array<any>) {
    this.board = value;
  }
  run(board, word) {
    return this.dfs(board, word);
  }
  dfs(board: any[], word: string) {
    console.log(board, word);
  }
}

let wordSearch = new MySolution([[], [], []]);

