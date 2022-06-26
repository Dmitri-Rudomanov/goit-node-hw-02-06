const express = require("express");
const router = express.Router();

const { contactsController } = require("../../../controller");
const {
  validationAddContact,
  validationUpdateContact,
   validationUpdateContactsStatus,
} = require("./validate.js");

router
  .get("/", contactsController.getAll)
  .get("/:contactId", contactsController.getById)
  .post("/", validationAddContact, contactsController.add)
  .delete("/:contactId", contactsController.remove)
  .put("/:contactId", validationUpdateContact, contactsController.update)
  .patch('/:contactId/favorite',validationUpdateContactsStatus,contactsController.updateStatus)

module.exports = router;
