import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setReady] = useState(false);

  //fetch로 API 값 받아온 후 상태 업데이트
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=aee9815c25cfd1d8502963cafb0c7368')
    .then(result => result.json())
    .then(jsonresult => {
      setTemp(jsonresult.main.temp);
      setDesc(jsonresult.weather[0].main);
      setIcon(jsonresult.weather[0].icon);
      setReady(true);
    })
    .catch(err => console.error(err))  
  }, [])


  if(isReady){
    return (
      <div className="App">
        <p>Temp : {temp}</p> 
        <p>Desc : {desc}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon"/>     
      </div>
    );
  } else {
    return <div>Loading!</div>
  }
}

export default App;
