const {apiAdd, apiList, apiEdit, apiFind, apiDel} = require('./Api');

const user = 'sang-il';
const title = 'Api test note title';
const body = 'Api test note';
const key = 'test';

//const fetch = require("node-fetch");


describe('Api.test round trip', () =>{
    let testID = '';
    test('Api.test  test', async () => {
        let didPass = true;
        try{
            let res = await apiAdd(user, title, body);
            testID = res.insertedId;
        } catch(err){
            didPass = false;
            console.log(err);
        }
        console.log("Added " + testID);
        expect(didPass).toBe(true);
    });
});