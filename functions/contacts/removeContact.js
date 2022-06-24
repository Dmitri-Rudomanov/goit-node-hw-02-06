const writeBeautifyFile = require('./writeBeautifyFile')
const readBeautifyFile = require('./readBeautifyFile')

const removeContact = async contactId => {
  try {
    const contacts = await readBeautifyFile()
    if (contacts.find(({ id }) => `${id}` === `${contactId}`)) {
      const filteredContacts = contacts.filter(
        ({ id }) => `${id}` !== `${contactId}`,
      )
      await writeBeautifyFile(filteredContacts)
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = removeContact
