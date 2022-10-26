import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Layout from './page/Layout';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Layout />}>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
