import './App.css';
import { Form } from './components/Form';
import Heading from './components/Heading';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Heading />
      <Routes>
        <Route path="/" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
