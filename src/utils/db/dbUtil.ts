

export function  db_put (id:string,data:any):string{
    console.log("db_put id = ",id," data = ",data)
    let all = find_all(id);
    if(all){
    // @ts-ignore
        return  utools.db.put({
            _id: id,
            data: Array.from(data),
            _rev: all._rev
        })
    }else{
    // @ts-ignore
        return  utools.db.put({
            _id: id,
            data: Array.from(data)
        })
    }

}

export function  db_get (id:string):string{
    console.log("db get id = ",id)
    // @ts-ignore
   return  utools.db.get(id).data
}

export function  db_del (id:string):string{
    console.log("db remove id = ",id)
    // @ts-ignore
   return  utools.db.remove(id)
}

function find_all(key:string) {
    // @ts-ignore
    const all = utools.db.get(key);
    console.log("find_all key",key, "all", all)
    return all;
}
function find_team_db() {
    // @ts-ignore
    const all = utools.db.get('flow.list');
    return all;
}


// 查询所有关注了的队伍
function find_all_star_team() {
    const all = find_team_db();
    console.log('all flow team: ', all)
    const data = all ? new Set(all.data) : new Set();
    return data;
}


