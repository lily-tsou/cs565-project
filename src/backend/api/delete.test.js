const del = require('./delete');

test('delete note test', () => {
    let rc = true;

    try {
        del("id");
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});
