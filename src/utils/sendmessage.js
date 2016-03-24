/**
 * Created by deronlee on 3/24/16.
 */
'use strict'

const config = require('./config')

function send(msg, text, slack) {
    slack.chat.postMessage({
        token: config('SLACK_TOKEN'),
        icon_emoji: config('ICON_EMOJI'),
        channel: msg.channel,
        username: 'Starbot',
        text: text
    }, (err, data) => {
        if (err) throw err

        let txt = _.truncate(data.message.text)

        console.log(`🤖  beep boop: I responded with "${txt}"`)
    })

}

exports.send = send;