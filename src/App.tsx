import React, {useState} from 'react';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import Course from "./pages/course/Course";
import TeamList from "./pages/team/TeamList";
// @ts-ignore
import {ActionType} from "./enums/ActionType";
import {db_put} from './utils/db/dbUtil';
import {db_get} from './utils/db/dbUtil';

// import utools from 'utools';
interface MenuInterface {
    index: number,
    label: string,
    action: ActionType,
    url:string,
}

const {Header, Content, Sider} = Layout;


const menu: MenuInterface[] = [
    {index: 1, label: "最近比赛", action: ActionType.TODY,url:"course"},
    {index: 2, label: "关注队伍", action: ActionType.FLOW,url:"flow"},
    {index: 3, label: "球队排名", action: ActionType.RANKING,url:"ranking"},
    {index: 4, label: "季后赛赛程", action: ActionType.PLAYOFF,url:"playoff"},

]

const items2: MenuProps['items'] = menu.map(
    (item, index) => {
        return {
            key: item.url,
            label: item.label,
        };
    },
);

const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const navigate = useNavigate();
    // 用户选择的菜单项目
    const [selectedMenuItem, setSelectedMenuItem] = useState('1');
    //处理用户的菜单点击事件
    const handleClickMenu = (e: any) => {
        console.log("selectedMenuItem--key:", e.key)
        navigate(`/${e.key}`)
        // db_put("111", "aaa")
        // const data = db_get("111")
        // console.log("db get 11:", data)

    };
    return (

        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div className="demo-logo"/>
                {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />*/}
            </Header>
            <Layout>
                <Sider width={200} style={{background: colorBgContainer}}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                        items={items2}
                        //
                        selectedKeys={[selectedMenuItem]}
                        onClick={handleClickMenu}
                    />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}></Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {/*<MyContent action={1}  />*/}
                        {/*将菜单点击事件的action传入到 MyContent组件中*/}

                        <Routes>
                            <Route path="/course" element={<Course action={1}/>}/>
                            <Route path="/flow" element={<TeamList action={1}/>}/>
                            {/*<Route exact path="/charts" element={<Charts />} />*/}
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;