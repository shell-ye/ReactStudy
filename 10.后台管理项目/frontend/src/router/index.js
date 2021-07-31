// 这里是路由配置文件
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom'

import Home from 'Pages/home'
import Login from 'Pages/login'
import Register from 'Pages/register'
import ShopList from 'Pages/shoplist'
import ShopAdd from 'Pages/shopadd'
import Chart from 'Pages/chart'
import Edit from 'Pages/edit'
import Explain from 'Pages/explain'
import Setting from 'Pages/setting'
import NotFund from 'Pages/notfund'

const nav = [{
    id: 1,
    path: '/home',
    component: Home
}, {
    id: 2,
    path: '/login',
    component: Login
}, {
    id: 3,
    path: '/register',
    component: Register
}, {
    id: 4,
    path: '/shoplist',
    component: ShopList
}, {
    id: 5,
    path: '/shopadd',
    component: ShopAdd
}, {
    id: 6,
    path: '/chart',
    component: Chart
}, {
    id: 7,
    path: '/edit',
    component: Edit
}, {
    id: 8,
    path: '/setting',
    component: Setting
}, {
    id: 9,
    path: '/explain',
    component: Explain
}, {
    id: 10,
    path: '',
    component: NotFund
}]

const RouterComponent = () => (
    <Switch>
        <Redirect from="/" to="/home/hot" exact></Redirect>
        {nav.map(item => <Route key={ item.id } path={ item.path } component={ item.component } />)}
    </Switch>
)

export default RouterComponent