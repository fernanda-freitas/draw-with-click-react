import { useState } from 'react';
import './App.css';

function App() {
  const [clickPosition, setClickPosition] = useState([{}]);

  const handleClick = (e) => (
    setClickPosition([ ...clickPosition , {x: e.clientX, y: e.clientY }])
  )

  return (
    <div className="App" onClick={handleClick}>
      {clickPosition.map((circle) => {
        return <div className='click' style={{left: circle.x, top: circle.y}}></div>
      })}
    </div>
  );
}

export default App;
