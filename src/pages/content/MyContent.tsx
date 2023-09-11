import React from 'react';
import { Avatar, List } from 'antd';
import {ActionType} from "../../enums/ActionType";



const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const MyContent: React.FC<{action:ActionType}> = (props) => (
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={props.action}
                />
            </List.Item>
        )}
    />
);

export default MyContent;