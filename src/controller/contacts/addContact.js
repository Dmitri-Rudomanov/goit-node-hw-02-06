const { HTTP_CODES, STATUS } = require('../../helpers/constants.js')

const { contactServices } = require('../../services')

const addContact = async (req, res, next) => {
  try {
    const userId = req.user.id
    const data = await contactServices.addContact(userId, req.body)
    return res.status(HTTP_CODES.CREATED).json({
      status: STATUS.SUCCESS,
      code: HTTP_CODES.CREATED,
      data,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
