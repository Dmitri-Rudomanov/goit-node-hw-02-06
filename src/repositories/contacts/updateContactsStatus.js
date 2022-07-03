const model = require('../../schemas/contacts.js')

const updateContactsStatus = async (userId, contactId, body) => {
  try {
    const data = await model.findByIdAndUpdate(
      { _id: contactId, owner: userId },
      body,
      {
        new: true,
      },
    )
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = updateContactsStatus