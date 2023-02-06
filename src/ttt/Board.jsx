import React from 'react';

export function TicTacToeBoard({ ctx, G, moves }) {
  const onClick = (id) => moves.clickCell(id);

  let winner = '';
  if (ctx.gameover) {
    if (ctx.gameover.winner !== undefined && ctx.gameover.winner == 0){
      winner = <div id="winner">Winner: O</div>
  } else if (ctx.gameover.winner !== undefined && ctx.gameover.winner == 1){
      winner = <div id="winner">Winner: X</div>
  }else{
      winner = <div id="winner">Draw!</div>
  }
  }

  const cellStyle = {
    border: '5px solid #B9379B',
    lineHeight: '0%',
    textAlign: 'center',
    fontSize: 'calc(1.7vw + 1.7vh)'
  };

  let tbody = [];
  for (let i = 0; i < 3; i++) {
    let cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td key={id} className='w-full h-full flex items-center justify-center border-darkpurple border-solid border-[5px]'>
        {G.cells[id] ? (
          <div className='w-full h-full bg-darkpurple text-lightblue opacity-70 flex items-center justify-center' style={cellStyle}>{G.cells[id]}</div>
        ) : (
          <button id='lol' className='w-full h-full bg-lightblue text-darkpurple opacity-70 flex items-center justify-center' style={cellStyle} onClick={() => onClick(id)} />
        )}
        </td>
      );
    }
    tbody.push(<tr className='w-[45%] h-[30%] flex items-center justify-center' key={i}>{cells}</tr>);
  }

  return (
    <div className='w-full h-full'>
      <table className='w-full h-[90%]' id="board">
        <tbody className='w-full h-full flex flex-col items-center justify-center'>{tbody}</tbody>
      </table>
      <div className='w-full h-[10%] flex items-start justify-center'>{winner}</div>
    </div>
  );
}
