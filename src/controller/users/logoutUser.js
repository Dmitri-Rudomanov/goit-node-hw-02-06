const { HTTP_CODES, STATUS } = require('../../helpers/constants.js')

const { authServices } = require('../../services')

const logoutUser = async (req, res, next) => {
  try {
    const id = req.user.id
    await authServices.logoutUser(id)
    return res.status(HTTP_CODES.NO_CONTENT).json({
      status: STATUS.SUCCESS,
      code: HTTP_CODES.NO_CONTENT,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = logoutUser
