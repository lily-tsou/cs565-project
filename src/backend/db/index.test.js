// import { Connection } from './index';
// Switched from ES modules to CommonJS
// import * as mongodb from 'mongodb';
// import config from '../config';

const mongodb = require('mongodb');
const config = require('../config');

// test('db/index  test', () => {
//     let rc = true;

//     // this gives open handle error in jest due to Connection.connect()
//     try {
//         const Connection = mongodb.createConnection(config.mongodb);
//         Connection.connect();
//         Connection.destroy();
//     } catch (err) {
//         rc = false;
//     }

//     expect( rc ).toBe(true);
// });

