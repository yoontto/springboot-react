import './App.css';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <ToolBar>
          <Typography>
            Carshop
          </Typography>
        </ToolBar>
      </AppBar>
      <Login />
    </div>
  );
}

export default App;
