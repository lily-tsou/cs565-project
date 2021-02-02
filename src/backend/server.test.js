const startServer = require('./server');

test('Server test', () => {
    expect( startServer() ).toBe(true);
});

