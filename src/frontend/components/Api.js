export const apiList = async (user) => {
    let result = await fetch('/list', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({"user": user})
    })
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

export const apiAdd = async (user, title, note) => {
    let result = await fetch('/add', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: "POST",
        body: JSON.stringify({"user": user, "title": title, "note": note})
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });    
    return result;
};

export const apiEdit = async (user, id, title, note) => {
    let result = await fetch('/edit', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'PUT',
        body: JSON.stringify({"user": user, "id": id, "title": title, "note": note})
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });    
    return result;
};

export const apiFind = async (user, key) => {
    let result = await fetch('/find', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'POST',
        body: JSON.stringify({"user": user, "key": key})
    })
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

export const apiDel = async (user, id) => {
    let result = await fetch('/del', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'DELETE',
        body: JSON.stringify({"user": user, "id": id})
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });
    return result;    
};