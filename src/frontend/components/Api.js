export const apiList = async () => {
    let result = await fetch('/list')
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .then(list => { return list; })
    .catch(err => { 
        console.log(err); 
    });
    return result;
};

export const apiAdd = async (note) => {
    let result = await fetch('/add?note=' + note)
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });    
    return result;
};

export const apiEdit = async (id, note) => {
    let result = await fetch('/edit?id=' + id + '&note=' + note)
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });    
    return result;
};

export const apiFind = async (key) => {
    let result = await fetch('/find?key=' + key)
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .then(list => { return list; })
    .catch(err => { 
        console.log(err); 
    });
    return result;
};

export const apiDel = async (id) => {
    let result = await fetch('/del?id=' + id)
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });
    return result;    
};