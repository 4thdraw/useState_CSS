import { useState } from 'react';
import './App.css';

function App() {
  //useState로 선언된 변수의 값이 달라지면
  //App컴포넌트 재랜더링한다.
  // const open = true; 
  const [open, setToggle] = useState(true);
  return (
    <div className={ open ? "white" : "dark" } >
    {/* 버튼을 클릭하면 클래스명이 번갈아 가면서 들어온다.
        */}
        <button onClick={ () => { setToggle(!open); } }>
           클릭하면 화면이 바뀌지게
        </button>
        
    </div>
  );
}

export default App;
