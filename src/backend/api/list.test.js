const add = require('./add');

test('add note test', () => {
    let rc = true;

    try {
        add("Test note 1");
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});

