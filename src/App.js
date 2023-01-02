import { useState } from 'react';
import './App.css';
import Quick from './component/Quick';
import Notice from './component/Notice';

function App() {
 
  const [open, setToggle] = useState(true);
  return (
    <div className={ open ? "body openpopup" : "body" }   >
      <div id="pop">
        <button onClick={ () => { setToggle(!open) } }>닫기</button>
        <p>화면 정가운데</p>
      </div> 
      <Quick></Quick> 
      <Notice title="공지사항"></Notice>
    </div>
  );
}

export default App;
