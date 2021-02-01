// Switched from ES modules to CommonJS
// import StartServer from './server';
const StartServer = require('./server');

test('Server test', () => {
    expect( StartServer() ).toBe(true);
});

