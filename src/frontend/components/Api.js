/*
    Api.js

    All API function calls. 

    apiList: Return a list of all notes in database
        parameters: 
                user: this is not a current feature of the app, but would
                eventually be used for user authentication
    apiAdd: Add a note to the database
        parameters: 
                user: user ID
                title: string to be stored as note title
                body: string to be stored as note body
    apiEdit: Edit and save a note to the database
        parameters:
                user, id, title (see apiAdd)
                id: note ID
    apiFind: Find a specific note given a search string
        parameters:
                user: user ID
                key: search key
    apiDel: Delete a specific note
        parameters:
                id: note ID
                user: user ID
*/

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