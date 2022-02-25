let board = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 2],
]

for(let y = 0; y < board.length; y++){
  let row = board[y];
  console.log("This is row " + y + ": " + row)

    for (let x=0; x < row.length; x++) {
        let celula = row[x];
        console.log("Célula " + x + " da linha " + y + ": " + celula)
    }

}

console.table(board)