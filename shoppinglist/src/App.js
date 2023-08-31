import logo from './logo.svg';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddItem from './AddItems';
import './App.css';
import { AppBar } from '@mui/material';

function App() {
  const [items, setItems] = useState([]);

  const addItem1 = (item) => {
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
      <Stack alignItems="center">
        <AddItem newItem={addItem1}/>
        <List>
          {
            items.map((item, index) => 
              <ListItem key={index} divider>
                <ListItemText primary={item.product} secondary={item.amount}/>
              </ListItem>
            )
          }
        </List>
      </Stack>
    </Container>
  );
}

export default App;
