const { HTTP_CODES, STATUS } = require('../../helpers/constants.js')

const { contactServices } = require('../../services')

const getContactById = async (req, res, next) => {
  try {
    const {
      params: { contactId },
    } = req
    const userId = req.user.id
    const data = await contactServices.getContactById(userId, contactId)

    return data
      ? res
        .status(HTTP_CODES.OK)
        .json({ status: STATUS.SUCCESS, code: HTTP_CODES.OK, data })
      : next({
        status: HTTP_CODES.NOT_FOUND,
        code: HTTP_CODES.NOT_FOUND,
        message: 'Not found',
      })
  } catch (error) {
    next(error)
  }
}

module.exports = getContactById
