// Switched from ES modules to CommonJS
// import express from 'express';
// import apiRouter from './routes';
const express = require('express');
const apiRouter = require('./routes');

test('routes test', async () => {
    let rc = true;

    try {
        const app = express();
        app.use(express.static('public'));

        // this gives open handle error in jest due to Connection.connect()
        app.use(apiRouter);

    } catch (err) {
        rc = false;
    }
    
    expect(rc).toBe(true);
});


