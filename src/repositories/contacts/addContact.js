const model = require('../../model/contacts.js')

const addContact = async (userId, body) => {
  try {
    const data = await model.create({ ...body, owner: userId })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = addContact
