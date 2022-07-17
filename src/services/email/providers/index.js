const { NodeMailerProvider } = require('./NodeMailerProvider.js')
const { SendGridProvider } = require('./SendGridProvider.js')

const ndMailer = new NodeMailerProvider()
const sgMailer = new SendGridProvider()

module.exports = { ndMailer, sgMailer }
