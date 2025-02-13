import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Calculator from './components/Calculator';
import { MyProp1 } from './components/MyProp1';
import MaiNgocNotes from './components/MaiNgocNotes/MaiNgocNotes';
import BasicExample from './components/FinalExam/demoroute';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';


function App() {
  return (
    <div className="App">
      
      <ParentComp />
      
    </div>
  );
}

export default App;
