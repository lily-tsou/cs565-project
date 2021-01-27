import StartServer from './server';

test('Server test', () => {
    expect( StartServer() ).toBe(true);
});

