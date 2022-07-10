const { HTTP_CODES, STATUS } = require('../../helpers/constants.js')

const { userServices } = require('../../services')

const updateUserSubscription = async (req, res, next) => {
  try {
    const { body } = req
    const userId = req.user.id
    if (body.subscription === undefined) {
      return next({
        status: HTTP_CODES.BAD_REQUEST,
        code: HTTP_CODES.BAD_REQUEST,
        message: 'missing field subscription',
      })
    }
    const data = await userServices.updateUserSubscription(userId, body)
    return data
      ? res.status(HTTP_CODES.OK).json({
        status: STATUS.SUCCESS,
        code: HTTP_CODES.OK,
        data: {
          user: {
            email: data.email,
            subscription: data.subscription,
          },
        },
      })
      : next({
        status: HTTP_CODES.NOT_FOUND,
        code: HTTP_CODES.NOT_FOUND,
        message: 'Not found',
      })

    // if (data) {
    //   return res.status(HTTP_CODES.OK).json({
    //     status: STATUS.SUCCESS,
    //     code: HTTP_CODES.OK,
    //     data: {
    //       user: {
    //         email: data.email,
    //         subscription: data.subscription,
    //       },
    //     },
    //   })
    // }
  } catch (error) {
    next(error)
  }
}

module.exports = updateUserSubscription
