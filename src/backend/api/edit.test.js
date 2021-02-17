const edit = require('./edit');

test('edit note test', () => {
    let rc = true;

    try {
        edit("test id", "Test note");
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});

