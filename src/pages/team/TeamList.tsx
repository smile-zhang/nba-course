import React from 'react';
import {useEffect, useState} from 'react';
import {Avatar, List} from 'antd';
import {ActionType} from "../../enums/ActionType";
import TeamDTO from "../../interface/TeamDTO";
import {db_get, db_put, db_del} from "../../utils/db/dbUtil";
//时间搜索
const baseUrl = '/livecastv2/match/dateSchedule?format=json'

const follwTeamKey = 'followTeam'
const ss: TeamDTO = {
    teamName: "骑士",
    teamFlag: "qishi"
}
const Course: React.FC<{ action: ActionType }> = (props) => {
    const [data, setData] = useState<TeamDTO[]>();


    useEffect(() => {

        // let s2 = db_get(follwTeamKey);
        // // let s2 = db_put(follwTeamKey,"ssss");
        // console.log("sssss2", s2);
        // if (s2 !== null) {
        //
        //     const jsonObject: TeamDTO[] = JSON.parse(s2);
        //     console.log("sssss3", jsonObject);
        //     setData(jsonObject)
        // }
    }, []);


    return (

        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item: TeamDTO, index) => (

                <List.Item>
                    <List.Item.Meta
                        title={"aaaa"}
                        // avatar={<Avatar src={item.Flag1}/>}
                        // description={item.MatchDate+' '+item.MatchTime}
                    />
                    <div>fsdafdasfasd</div>
                    <button>xxx</button>
                </List.Item>


            )}
        />

    )
};

export default Course;