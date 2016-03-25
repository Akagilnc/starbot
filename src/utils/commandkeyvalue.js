/**
 * Created by deronlee on 3/25/16.
 */

var text = '({' +
    '"hello" : "I am mikhail.",' +
    '"brazil" : "Oh... I know a few things about Brazil.",' +
    '"ZipClass" : "STANDARD",' +
    '"County" : "TRAVIS",' +
    '"City" : "AUSTIN",' +
    '"State" : "TX",' +
    '"Latitude" : "+30.310606"' +
    '})';

var myObj = eval(text);

for (var key in myObj) {
    console.log(key + ': ' + myObj[key] + '<br>');
}

function getkeyvalue() {
    var myObj = eval(text);
    return myObj;
}

exports.getkeyvalue = getkeyvalue;