const signupUser = require('./signupUser')
const loginUser = require('./loginUser')
const logoutUser = require('./logoutUser')
const getCurrentUser = require('./getCurrentUser')
const updateUserSubscription = require('./updateUserSubscription')
const updateUserAvatar = require('./updateUserAvatar')
const updateCloudUserAvatar = require('./updateCloudUserAvatar')

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateUserSubscription,
  updateUserAvatar,
  updateCloudUserAvatar,
}
