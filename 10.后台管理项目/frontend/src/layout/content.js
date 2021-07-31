import React from 'react';
import RouterComponent from '@/router';

import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayoutContent extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{     
                        color: 'white',
                        height: '60px',
                        lineHeight: '60px',
                        textAlign: 'center',
                        fontSize: '20px'
                    }}>{ collapsed ? 'React' : 'React-Manage' }</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}><Link to="/home">首页</Link></Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="数据管理">
                            <Menu.Item key="2"><Link to="/shoplist">店铺列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="添加数据">
                            <Menu.Item key="3"><Link to="/shopadd">添加店铺</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<TeamOutlined />} title="图表">
                            <Menu.Item key="4"><Link to="/chart">用户分布</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<TeamOutlined />} title="编辑">
                            <Menu.Item key="5"><Link to="/edit">用户编辑</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6"><Link to="/setting">设置</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/explain">说明</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ padding: '0 16px', boxSizing: 'border-box', background: 'rgb(240, 242, 245)' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                        {/* 路由展示区 */}
                        <RouterComponent />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>版权来源于 - 夏叶</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutContent