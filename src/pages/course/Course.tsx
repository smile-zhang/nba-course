import React from 'react';
import {useEffect, useState} from 'react';
import {Avatar, Button, List, Space} from 'antd';
import {ActionType} from "../../enums/ActionType";
import {request} from "../../utils/request/request";
import PlayDTO from "../../interface/PlayDTO";

//时间搜索
const baseUrl = '/livecastv2/match/dateSchedule?format=json'
//队伍搜索
const searchUrl = '/livecastv2/match/searchSchedule?format=json'
//季后赛排名
const team_standing_url = '/api?p=radar&s=team_standing&a=conference'


const Course: React.FC<{ action: ActionType }> = (props) => {

    const [data, setData] = useState<PlayDTO[]>();

    useEffect(() => {
        fetchData('&team_name=' + '骑士');
    }, []);

    const fetchData = (searchKey: string) => {
        const url = searchUrl + searchKey;
        request.get(url).then((res) => {
            console.log("result::", res.result.data);
            setData(res.result.data)
        })
    };

    function flow(event: any) {
        console.log("ggg",event)

    }

    return (

        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item: PlayDTO, index) => (
                <List.Item>
                    <List.Item.Meta
                        title={item.Team1 + ' ' + item.Score1 + ' vs ' + item.Score2 + ' ' + item.Team2}
                        avatar={<Avatar src={item.Flag1}/>}
                        description={item.MatchDate + ' ' + item.MatchTime}
                    />
                    <Space wrap>
                            <Button onClick={()=>flow(item.Team1)}>关注主队</Button>
                            <Button onClick={()=>flow(item.Team2)}>关注客队</Button>
                    </Space>
                </List.Item>
            )}
        />
    )
};

export default Course;