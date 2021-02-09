/* list.js
*
    A function component to form a MongoDB query and execute.
    The returned object is a promise object to allow for asynchronous operation.
*
*/

const  { dbList } = require('../db');

const list = async () => {
    try {
        let result = await dbList((res) => {
            console.log(res);
            // result = res;
        });
        // console.log(result);

    } catch (err) {
        console.log("Caught error: " + err);
        return err;
    }
}

module.exports = list;