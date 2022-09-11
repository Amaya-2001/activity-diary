import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import { DropDown } from './components/DropDown';

function App() {
  let programmes = ["Software Engineering", "Computer Science", "Textile Engineering"]
  return (
    <div className="App">
      <DropDown programmes={programmes}></DropDown>
      <h1></h1>
    </div>
  );
}

export default App;
