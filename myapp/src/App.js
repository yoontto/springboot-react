import logo from './logo.svg';
import React from 'react';
import './App.css';


 function App() {
  //함수 이용
  /* return (
     <div>
       <h1>Hello world</h1>
       <p>This is my first React component</p>
     </div>
   );*/

  //프래그먼트 이용
  /* return (
    <React.Fragment>
      <h1>Hello world</h1>
      <p>This is my first React component</p>
    </React.Fragment>
    );*/
  
  //더 간단한 프래그먼트
  return(
    <>
      <h1>Hello world</h1>
      <p>This is my first React component</p>
    </>
  );
 }


export default App;
