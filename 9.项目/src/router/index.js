// 这里是路由配置文件
import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom'

// Redirect 是重定向组件
// 属性：
//      from: 从哪儿来
//      to: 到哪儿去
//      exact: 完全( 严格 )匹配，例如 / 和 /home 的匹配

// Switch 一次渲染一个组件，当两个路由组件是同一个 path 时只渲染一个，是一个优化方案
// 在 React 开发工具中可以看到渲染路由时每个路由都会会出现很多个相同的路由组件，switch 包裹下将只会渲染一个

// Route 是路由容器
// 属性：
//      path: 路由路径
//      component: 路由路径对应的组件
//      render: 渲染一个组件
//      children: 渲染一个子组件

import Home from 'Pages/home'
import Mine from 'Pages/mine'
import NotFund from 'Pages/notfund'

// 动态引入组件，即懒加载
// const OtherComponent = React.lazy(() => import('./OtherComponent'));

const RouterComponent = () => (
    <Switch>
        {/* 重定向 */}
        <Redirect from="/" to="/home/hot" exact></Redirect>

        {/* 页面组件 */}
        <Route path="/home" component={ Home } />
        <Route path="/mine" component={ Mine } />

        {/* 错误路由匹配 */}
        <Route component={ NotFund } />
    </Switch>
)

export default RouterComponent