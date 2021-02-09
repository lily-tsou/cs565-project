const retrieve = require('./retrieve');

test('retrieve note test', () => {
    let rc = true;

    try {
        retrieve("id");
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});
