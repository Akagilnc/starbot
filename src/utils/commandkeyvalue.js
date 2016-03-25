/**
 * Created by deronlee on 3/25/16.
 */

var text = '({' +
    '"hello" : "I am mikhail.",' +
    '"brazil" : "Oh... I know a few things about Brazil.",' +
    '"zipclass" : "STANDARD",' +
    '"county" : "TRAVIS",' +
    '"city" : "AUSTIN",' +
    '"state" : "TX",' +
    '"latitude" : "+30.310606",' +
    '"hello" : "I am deronlee"' +
    '})';

var myObj = eval(text);

for (var key in myObj) {
    console.log(key.toString() + '      ' + myObj[key].toString());
}

function getKeyValue() {
    var myObj = eval(text);
    return myObj;
}

exports.getkeyvalue = getKeyValue;