const express = require('express')
const router = express.Router()

const { contactsController } = require('../../../controller')
const guard = require('./../../../helpers/guard')
const {
  validationAddContact,
  validationUpdateContact,
  schemaUpdateContactsStatus,
} = require('./validate.js')

router
  .get('/', guard, contactsController.getAll)
  .get('/:contactId', guard, contactsController.getById)
  .post('/', [guard, validationAddContact], contactsController.add)
  .delete('/:contactId', guard, contactsController.remove)
  .put(
    '/:contactId',
    [guard, validationUpdateContact],
    contactsController.update,
  )
  .patch(
    '/:contactId/favorite',
    [guard, schemaUpdateContactsStatus],
    contactsController.updateStatus,
  )

module.exports = router
