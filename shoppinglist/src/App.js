import logo from './logo.svg';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import { AppBar } from '@mui/material';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    //스프레드 표기법 : 새로 넣는 item을 기존 items 배열에 병합
    setItems([item, ...items]);
  }

  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
