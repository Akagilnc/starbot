/**
 * Created by deronlee on 3/24/16.
 */

const key_value = require("./getkeyvalue")

var text = ``;
var hello = `hello. `;

function makeMessage(msg, username) {


    if (arguments == null || arguments.length == 0 || arguments[0] == null){
        return text;
    }

    var checkMsg = arguments[0].toString().toLowerCase();

    var myObj = key_value.getkeyvalue();

    for (var key in myObj) {

        if (checkMsg.indexOf(key , 11) != -1) {
            text = text + myObj[key] + "\n";
        }
        else {
            text = `beep boop: I hear you loud and clear! I am still learning how to say more words XD`;
        }

    }


    text = hello + arguments[1] + " You said \'" + msg + "\'. \n " + text

    return text;
}

exports.makeMessage = makeMessage;
