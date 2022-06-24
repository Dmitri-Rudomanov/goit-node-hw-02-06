const writeBeautifyFile = require('./writeBeautifyFile')
const readBeautifyFile = require('./readBeautifyFile')

const addContact = async body => {
  try {
    const contacts = await readBeautifyFile()
    const id = Math.max(...contacts.map(({ id }) => id)) + 1
    const contact = { id, ...body }
    await writeBeautifyFile([...contacts, contact])
    return contact
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = addContact
