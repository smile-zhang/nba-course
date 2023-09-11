interface PlayDTO {
    Title:string //比赛标题

    Team1: string,//队伍一名称
    Flag1:string,//队伍一图标
    Score1:string,//队伍一得分

    Team2: string,//队伍二名称
    Flag2: string,//队伍二图标
    Score2:string,//队伍二得分
    MatchDate:string,//比赛日期
    MatchTime:string,//比赛时间

}
export default PlayDTO;
