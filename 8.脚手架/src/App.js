import logo from './logo.svg';
import './App.css';

import One from './components/One'
import Two from './components/Two'
import ImgComponent from './components/Img'
import Parent from './components/Parent'
import Hook from './components/Hook'
import HookObject from './components/HookObject'
import HookMoreTimes from './components/HookMoreTimes'

import { Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

import { withRouter, Redirect } from 'react-router-dom'

import Reducer from './components/Reducer';

function App(props) {
  console.log(props)

  // 监听路由变化
  props.history.listen(link => {
    console.log(link)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One />
        <Two />
        <ImgComponent />
        <Parent />
        <Hook />
        <HookObject />
        <HookMoreTimes />
      </header>
      <Redirect from="/" to="/FirstPage/123" exact />
      <Route path="/FirstPage/:id" component={ FirstPage } />
      <Route path="/SecondPage" component={ SecondPage } />
      <Reducer />
    </div>
  );
}

export default withRouter(App);
