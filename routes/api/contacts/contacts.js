const express = require('express')
const router = express.Router()

const { contactsController } = require('../../../controller')
const {
  validationAddContact,
  validationUpdateContact,
} = require('./validate.js')

router
  .get('/', contactsController.getAll)
  .get('/:contactId', contactsController.getById)
  .post('/', validationAddContact, contactsController.add)
  .delete('/:contactId', contactsController.remove)
  .patch('/:contactId', validationUpdateContact, contactsController.update)

module.exports = router
