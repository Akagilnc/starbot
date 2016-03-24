/**
 * Created by deronlee on 3/24/16.
 */

var bot_name = `mikhail`
var hello = `hello. `
var brazil = "Oh... I know a few things about Brazil.";
function getMessage() {
    var text = `beep boop: I hear you loud and clear! I am still learning to say more words XD`;

    if (arguments == null || arguments.length == 0 || arguments[0] == null){
        return text;
    }

    arguments[0] = arguments[0].toString().toLowerCase();

    if (arguments[0] != null && arguments[0].indexOf("hello" , 11) != -1) {
        text = `I am ` + bot_name
    }

    if (arguments[0] != null && arguments[0].indexOf("brazil" , 11) != -1) {
        text = brazil
    }

    text = hello + arguments[1] + " You said \'" + arguments[0] + "\'. \n " + text

    return text;
}