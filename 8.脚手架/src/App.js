import logo from './logo.svg';
import './App.css';

import One from './components/One'
import Two from './components/Two'
import ImgComponent from './components/Img'
import Parent from './components/Parent'
import Hook from './components/Hook'
import HookObject from './components/HookObject'
import HookMoreTimes from './components/HookMoreTimes'

// 组件祖合
import ComBination from './components/Combination'

// classname 处理样式
import ClaassNameStyle from './components/ClaassNameStyle'

// styled-componnets 处理样式
import StyledComponentsStyle from './components/StyledComponentsStyle'

// 事件对象
import EventObject from './components/EventObject';

// 表单处理
import Form from './components/Form';

import { Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

// flux
import Flux from './pages/flux'

// reduxNoSplit
import ReduxNoSplit from './pages/reduxNoSplit'

import { withRouter, Redirect } from 'react-router-dom'

import ReactTransitionGroup from './components/ReactTransitionGroup';

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
      <Route path="/flux" component={ Flux } />
      <Route path="/reduxNoSplit" component={ ReduxNoSplit } />
      <ComBination>
        <p>组件组合内容</p>
      </ComBination>
      <ClaassNameStyle />
      <StyledComponentsStyle />
      <EventObject/>
      <Form/>
      <ReactTransitionGroup />
    </div>
  );
}

export default withRouter(App);
