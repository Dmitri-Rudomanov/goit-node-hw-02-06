const { contactsFunctions } = require("../repository");

class ContactServices {
  constructor() {
    this.item = { contacts: contactsFunctions };
  }

  async listContacts() {
    try {
      const data = await this.item.contacts.listContacts();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getContactById(contactId) {
    try {
      const data = await this.item.contacts.getContactById(contactId);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async removeContact(contactId) {
    try {
      const data = await this.item.contacts.removeContact(contactId);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addContact(body) {
    try {
      const data = await this.item.contacts.addContact(body);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateContact(contactId, body) {
    try {
      const data = await this.item.contacts.updateContact(contactId, body);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

    async updateContactsStatus(contactId, { favorite }) {
    try {
      const data = await this.item.contacts.updateContactsStatus(
        contactId,
        { favorite },
      )
      return data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

module.exports = { ContactServices };
