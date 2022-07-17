const signupUser = require('./signupUser')
const loginUser = require('./loginUser')
const logoutUser = require('./logoutUser')
const getCurrentUser = require('./getCurrentUser')
const updateUserSubscription = require('./updateUserSubscription')
const updateUserAvatar = require('./updateUserAvatar')
const updateCloudUserAvatar = require('./updateCloudUserAvatar')
const verifyUser = require('./verifyUser')
const verifyUserOneMoreTime = require('./verifyUserOneMoreTime')

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserSubscription,
  updateUserAvatar,
  verifyUser,
  verifyUserOneMoreTime,
  updateCloudUserAvatar,
}
