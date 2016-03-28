/**
 * Created by deronlee on 3/22/16.
 */
const assert = require('assert');
const message = require('../src/utils/message');

function testmain () {


    var text = message.makeMessage('@starbot: hellod,brazil,,boa noite','test')

    console.log(text);
    if (text.indexOf('I am mikhail.') == -1
        || text.indexOf('Oh... I know a few things about Brazil.') == -1
        || text.indexOf('I am deronlee') == -1
        || text.indexOf('Boa noite amigo') == -1) {
        assert(false);
    }

    var text = message.makeMessage('@starbot: ^^','test');
    console.log(text);
    if(text.indexOf('beep boop: I hear you loud and clear! I am still learning how to say more words XD') == -1)
    {
        assert(false);
    }
    assert(true);
}



exports.testmain = testmain;
