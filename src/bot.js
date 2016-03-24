
'use strict'

const slack = require('slack')
const _ = require('lodash')
const config = require('./config')
require('./utils/message')
require('./utils/sendmessage')

let bot = slack.rtm.client()

bot.started((payload) => {
  this.self = payload.self
})


bot.message((msg) => {
  
  if (!msg.user) return
  if (!_.includes(msg.text.match(/<@([A-Z0-9])+>/igm), `<@${this.self.id}>`)) return


  
  slack.users.info({
    token: config('SLACK_TOKEN'),
    user: msg.user
  }, (err, data) => {
    if (err) throw err
    var message = makeMessage(msg.text, data.user.name);
    send(msg, message, slack);

  })
})


module.exports = bot
