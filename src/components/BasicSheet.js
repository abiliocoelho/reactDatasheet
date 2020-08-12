import React, { useState } from 'react';
import Datasheet from '../lib/DataSheet';

const BasicSheet = ()=>{
  const [grid, setGrid] = useState([
    [
      { readOnly: true, value: '' },
      { value: 'A', readOnly: true },
      { value: 'B', readOnly: true },
      { value: 'C', readOnly: true },
      { value: 'D', readOnly: true },
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
      { value: 4 },
    ],
  ])

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