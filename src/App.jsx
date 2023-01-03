import { useState } from 'react';
import './App.css';

function App() {
  const [clickPosition, setClickPosition] = useState({});

  const handleClick = (e) => (
    setClickPosition({positionX: e.clientX, positionY: e.clientY})
  )

  return (
    <div className="App" onClick={(handleClick)}>
      <div className='click' style={{left:clickPosition.positionX, top:clickPosition.positionY}}></div>
    </div>
  );
}

export default App;
