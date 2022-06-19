const writeBeautifyFile = require('./writeBeautifyFile')
const readBeautifyFile = require('./readBeautifyFile')

const updateContact = async (contactId, body) => {
  try {
    const contacts = await readBeautifyFile()

    for (let i = 0; i < contacts.length; i++) {
      if (`${contacts[i].id}` === `${contactId}`) {
        const updContact = { ...contacts[i], ...body }
        contacts[i] = updContact
        await writeBeautifyFile(contacts)
        return updContact
      }
    }
    return null
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = updateContact
