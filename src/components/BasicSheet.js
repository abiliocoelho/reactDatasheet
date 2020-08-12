import React, { useState, useEffect } from 'react';
import Datasheet from '../lib/DataSheet';

const BasicSheet = ()=>{
  const [grid, setGrid] = useState([])
  useEffect(()=>{
    function setgrid(){
      setGrid([
        [
          { readOnly: true, value: 'Pestação' },
          { value: 'Código', readOnly: true },
          { value: 'Produto', readOnly: true },
          { value: 'Dias', readOnly: true },
          { value: 'Valor', readOnly: true },
        ],
        [
          { readOnly: true, value: 1 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 2 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 4 },
        ],
        [
          { readOnly: true, value: 3 },
          { value: 1 },
          { value: 3 },
          { value: 3 },
          { value: 3 },
        ],
        [
          { readOnly: true, value: 4 },
          { value: 2 },
          { value: 4 },
          { value: 4 },
          { value: 8 },
        ],
      ])
    }
    setgrid()
  },[])

  

  const valueRenderer = cell => cell.value;
  const onCellsChanged = changes => {
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    setGrid(grid);
  };
  const onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;
    
  return(
    <Datasheet
        data={grid}
        valueRenderer={valueRenderer}
        onContextMenu={onContextMenu}
        onCellsChanged={onCellsChanged}
      />
  )
}

export default BasicSheet
