const getContacts = require('./getContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const updateContact = require('./updateContact')
const updateContactFavorite = require('./updateContactFavorite')

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateContactFavorite,
}
