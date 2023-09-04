import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';
import Carlist from './components/Carlist';

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
      <Carlist />
    </div>
  );
}

export default App;
