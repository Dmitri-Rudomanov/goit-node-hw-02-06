const fs = require('fs').promises

const contactsPath = require('./contactsPath')

const writeBeautifyFile = async data => {
  try {
    const toString = JSON.stringify(data, null, 4)
    await fs.writeFile(contactsPath, toString)
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = writeBeautifyFile
