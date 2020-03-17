import React, {useCallback, useState} from 'react';
import './App.css';
import styled from 'styled-components'

const BorardWrapper = styled.div`
  width: 480px;
`

const Wrapper = styled.div`

`;

const Grid = styled.div`
    display: inline-block;
    border: 1px solid #000;
    width: 30px;
    height: 30px;
`

const range = length => Array.from({length}).map((_, i) => i);

function Board({grids = [], setGrids = () => {}, player = 1}) {

  return (
    <BorardWrapper>
      {grids.map((g, i)=> (
          <Grid onClick={() => setGrids(grids.map((n, j) => j === i ? player : n))}>
            {g}
          </Grid>
      ))}
    </BorardWrapper>
  );
}

function App() {
  const [ grids, setGrids] = useState(
      Array.from({length: 15 * 15}).map(() => 0)
  );

  const [currentPlayer, setCurrentPlayer ] = useState(1);

  const takeAction = useCallback(
      grids => {
        setGrids(grids);

        setCurrentPlayer(player=> {
          switch (player) {
            case 1:
              return -1;
            case -1:
              return  1;
            default:
              return 0;
          }
        })
      },
      [setGrids, setCurrentPlayer]
  );

  return (
    <Wrapper>
        <Board grids={grids} setGrids={takeAction} player={currentPlayer}/>
    </Wrapper>
  );
}

export default App;
