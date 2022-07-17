const model = require('../../model/users.js')

const verifyUserOneMoreTime = async email => {
  try {
    const find = await model.findOne({ email })
    return find
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = verifyUserOneMoreTime
