import add_note from './add_note';
import { Connection } from './index';

test('add_note test', () => {
    let rc = true;

    // this gives open handle error in jest due to Connection.connect()
    try {
        add_note.all("Test note 1");
        Connection.destroy();
    } catch (err) {
        rc = false;
    }

    expect( rc ).toBe(true);
});

