/* index.js
*
    Creates a connection object to MongoDB.
    Connection parameters are imported from an external config module.
*
*/

import * as mongodb from 'mongodb';
import config from '../config';

import Add_note from './add_note';

export const Connection = mongodb.createConnection(config.mongodb);

Connection.connect(err => {
    if(err) console.log(err);
});

export default {
    Add_note
}