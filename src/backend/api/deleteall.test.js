const delAll = require('./deleteall');

test('delete all note test', () => {
    let rc = true;

    try {
        delAll();
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});
