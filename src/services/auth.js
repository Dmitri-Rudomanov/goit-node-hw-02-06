const { usersRepository } = require('../repositories')

const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.JWT_SECRET_KEY

class AuthServices {
  constructor() {
    this.repositories = { users: usersRepository }
  }

  async login({ email, password }) {
    try {
      const user = await this.repositories.users.findUserByEmail(email)

      if (!user || !(await user.isValidPassword(password))) {
        return null
      }
      const id = user.id
      const payload = { id }
      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '5h' })
      await this.repositories.users.updateUserToken(id, token)
      return token
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async logout(id) {
    try {
      return await this.repositories.users.updateUserToken(id, null)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

module.exports = { AuthServices }