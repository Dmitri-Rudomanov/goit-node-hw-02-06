const { ContactServices } = require('./contacts.js')
const { UserServices } = require('./users.js')
const { AuthServices } = require('./auth.js')
const { EmailServices } = require('./email.js')

const contactServices = new ContactServices()
const userServices = new UserServices()
const authServices = new AuthServices()
const emailServices = new EmailServices()

module.exports = { contactServices, userServices, authServices, emailServices }
