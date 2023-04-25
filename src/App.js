import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Stack } from '@mui/material';
import { Homepage } from './Components/Homepage';

function App() {
  return (
    <div className="App">
    <Stack direction="row">
     <Sidebar/>
     <Homepage/>
     </Stack>
    </div>
  );
}

export default App;
