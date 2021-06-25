import logo from './logo.svg';
import './App.css';

import One from './components/One'
import Two from './components/Two'
import ImgComponent from './components/Img'
import Parent from './components/Parent'

import { Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One />
        <Two />
        <ImgComponent />
        <Parent />
      </header>
      <Route path="/FirstPage" component={ FirstPage } />
      <Route path="/SecondPage" component={ SecondPage } />
    </div>
  );
}

export default App;
