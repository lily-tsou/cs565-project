const find = require('./find');

test('find notes test', () => {
    let rc = true;

    try {
        find("test key string");
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});

