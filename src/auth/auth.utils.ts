require('dotenv').config()

import * as bcrypt from 'bcrypt'

export class Encryptor {
  static async encrypt(password: string) {
    return bcrypt.hashSync(password, 8)
  }
  static async compare(raw: string, hashed: string) {
    return bcrypt.compareSync(raw, hashed)
  }
}

export class Tokener {
  static async createToken() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    )
  }
}
