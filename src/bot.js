
'use strict'

const slack = require('slack')
const _ = require('lodash')
const config = require('./config')

let bot = slack.rtm.client()


var bot_name = `mikhail`
var hello = `hello.`
var brazil = "Oh... I know a few things about Brazil.";

bot.started((payload) => {
  this.self = payload.self
})





bot.message((msg) => {
  var text = `beep boop: I hear you loud and clear! I am still learning to say more words XD`
  if (!msg.user) return
  if (!_.includes(msg.text.match(/<@([A-Z0-9])+>/igm), `<@${this.self.id}>`)) return
  if (msg.text.toString().indexOf("hello" , 11) != -1) {
    text = hello + msg.user.username + `. I am ` + bot_name
  }

  if (msg.text.toString().toLowerCase().indexOf("brazil" , 11) != -1) {
    text = hello + msg.user_id + '\n ' + brazil
  }

  let remoteusername = ''
  slack.users.info({
    token: config('SLACK_TOKEN'),
    user: msg.user
  }, (err, data) => {
    if (err) throw err
    remoteusername = data.username
  })



  slack.chat.postMessage({
    token: config('SLACK_TOKEN'),
    icon_emoji: config('ICON_EMOJI'),
    channel: msg.channel,
    username: 'Starbot',
    text: "You said \'" + msg.text + "\'. \n " + text + '\n' + remoteusername
  }, (err, data) => {
    if (err) throw err

    let txt = _.truncate(data.message.text)

    console.log(`🤖  beep boop: I responded with "${txt}"`)
  })
})

module.exports = bot
