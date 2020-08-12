import React from 'react';
import BasicSheet from './components/BasicSheet'
import  './lib/react-datasheet.css'

function App() {
  return (
    <div>
        <div className={'container'} >
          <div className={'sheet-container'}>
            <BasicSheet />
          </div>
          <div className={'divider'} />
          </div>
      </div>
  );
}

export default App;
