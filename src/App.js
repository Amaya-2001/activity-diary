import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import { DropDown } from './components/DropDown';
import { Form } from './components/Form';
import Heading from './components/Heading';

function App() {
  let programmes = ["Software Engineering", "Computer Science", "Textile Engineering"]
  return (
    <div className="App">
      <Heading />
      <Form />
      <h1></h1>
    </div>
  );
}

export default App;
