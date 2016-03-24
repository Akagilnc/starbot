/**
 * Created by deronlee on 3/24/16.
 */

var text = `beep boop: I hear you loud and clear! I am still learning how to say more words XD`;
var bot_name = `mikhail`
var hello = `hello. `
var brazil = "Oh... I know a few things about Brazil.";
function makeMessage(msg, username) {


    if (arguments == null || arguments.length == 0 || arguments[0] == null){
        return text;
    }

    var checkMsg = arguments[0].toString().toLowerCase();

    if (checkMsg.indexOf("hello" , 11) != -1) {
        text = `I am ` + bot_name
    }

    if (checkMsg.indexOf("brazil" , 11) != -1) {
        text = brazil
    }

    text = hello + arguments[1] + " You said \'" + msg + "\'. \n " + text

    return text;
}

exports.makeMessage = makeMessage;
