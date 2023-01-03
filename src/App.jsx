import { useState } from 'react';
import './App.css';

function App() {
  const [clickPosition, setClickPosition] = useState([{}]);

  const handleClick = (e) => (
    setClickPosition({x: e.clientX, y: e.clientY})
  )

  return (
    <div className="App" onClick={(handleClick)}>
      <div className='click' style={{left: clickPosition.x, top: clickPosition.y}}></div>
    </div>
  );
}

export default App;
