import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Calculator from './components/Calculator';
import { MyProp1 } from './components/MyProp1';
import MaiNgocNotes from './components/MaiNgocNotes/MaiNgocNotes';

function App() {
  return (
    <div className="App">
      
      <MaiNgocNotes/>
    </div>
  );
}

export default App;
