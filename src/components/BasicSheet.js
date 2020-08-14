import React, { useState, useEffect } from 'react';
import Datasheet from '../lib/DataSheet';

const BasicSheet = ()=>{
  const [grid, setGrid] = useState([])
  const item =  [
    { value: null },
    { value: null, readOnly: true },
    { value: null },
    { value: null },
  ]
  const [rows, setRows] = useState(grid.length)

  useEffect(()=>{
    function setgrid(){
      setGrid([
        [
          { value: 'Código', readOnly: true },
          { value: 'Produto', readOnly: true },
          { value: 'Dias', readOnly: true },
          { value: 'Valor', readOnly: true },
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
    <>
    <button onClick={()=> {
      setGrid([...grid, item])
      setRows(grid.length)
    
    }}>Adicionar</button>
  <p>{rows <=1 ? `${rows} Parcela` : `${rows} Parcelas`}</p>
    <Datasheet
        data={grid}
        valueRenderer={valueRenderer}
        onContextMenu={onContextMenu}
        onCellsChanged={onCellsChanged}
      />

      </>
  )
}

export default BasicSheet
