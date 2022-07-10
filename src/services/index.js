const { ContactServices } = require('./contacts.js')
const { UserServices } = require('./users.js')
const { AuthServices } = require('./auth.js')

const contactServices = new ContactServices()
const userServices = new UserServices()
const authServices = new AuthServices()

module.exports = { contactServices, userServices, authServices }
