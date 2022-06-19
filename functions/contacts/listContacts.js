const readBeautifyFile = require('./readBeautifyFile')

const listContacts = async () => {
  try {
    return await readBeautifyFile()
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = listContacts
