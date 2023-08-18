import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/*
  <useEffect 기본 형태>
  useEffect(callback, [dependencies])

  * callback : 보조 작업의 논리 (fetch 등)
  * dependencies : 의존성을 나타내는 배열 (선택사항, 생략 가능)
*/

function TestUseEffect() {
  const [count, setCount] = useState(0);

  //렌더링이 끝나면 매번 호출됨
  //빈 배열을 [] 넣어주면 첫번째 렌더링 이후에만 콜백함수가 실행된다.
  useEffect(() => {
    console.log("ㅎㅎ 유즈이펙틉니당~");      
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default TestUseEffect;
