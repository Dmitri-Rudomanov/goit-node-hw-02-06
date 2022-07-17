const { HTTP_CODES, STATUS } = require('../../helpers/constants.js')

const { contactServices } = require('../../services')

const removeContact = async (req, res, next) => {
  try {
    const userId = req.user.id
    const data = await contactServices.removeContact(
      userId,
      req.params.contactId,
    )
    return data
      ? res.status(HTTP_CODES.OK).json({
        status: STATUS.SUCCESS,
        code: HTTP_CODES.OK,
        message: 'contact deleted',
      })
      : next({
        status: HTTP_CODES.NOT_FOUND,
        code: HTTP_CODES.ERROR,
        message: 'Not found',
      })
  } catch (error) {
    next(error)
  }
}

module.exports = removeContact
