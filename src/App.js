import { useState } from 'react';

function App() {
  //useState로 선언된 변수의 값이 달라지면
  //App컴포넌트 재랜더링한다.
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    {/* 버튼을 클릭하면 count의 값을 1로 변경해라 
        count = count + 1; count++; 에러난다.
        */}
        <button onClick={ () => { setCount(count + 1); } }>클릭하면 화면이 바뀌지게</button>
        <h2 style={{fontSize : 50 }}>{count}</h2>
    </div>
  );
}

export default App;
