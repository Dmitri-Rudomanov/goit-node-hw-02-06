const { HTTP_CODES, STATUS } = require('../../helpers/constants.js')

const { userServices } = require('../../services')

const signupUser = async (req, res, next) => {
  try {
    const { password, email, subscription } = req.body
    const user = await userServices.findUserByEmail(email)
    if (user) {
      return next({
        status: HTTP_CODES.CONFLICT,
        code: HTTP_CODES.CONFLICT,
        data: 'Conflict',
        message: 'Email in use',
      })
    }
    const newUser = await userServices.signupUser({
      password,
      email,
      subscription,
    })
    return res.status(HTTP_CODES.CREATED).json({
      status: STATUS.SUCCESS,
      code: HTTP_CODES.CREATED,
      data: {
        user: {
          email: newUser.email,
          subscription: newUser.subscription,
          avatarURL: newUser.avatarURL,
        },
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = signupUser
