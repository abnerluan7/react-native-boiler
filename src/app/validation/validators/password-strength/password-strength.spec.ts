import faker from 'faker'

import { InvalidFieldError } from '@/app/validation/errors'

import { PasswordStrengthValidation } from './password-strength'

const makeSut = (field: string): PasswordStrengthValidation =>
  new PasswordStrengthValidation(field)

const specialCharacters = faker.random.arrayElement(['@', '_', '~', '`', '*'])

describe('PasswordStrengthValidation', () => {
  test.skip('Should return error if password doesnt have special characters', () => {
    const field = faker.random.word()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError('errors.passwordStrength'))
  })

  test('Should return error if password doesnt have uppercase letters', () => {
    const field = faker.database.column()
    const password = `${faker.random.word().toLowerCase()}${specialCharacters}`
    const sut = makeSut(field)
    const error = sut.validate({ [field]: password })
    expect(error).toEqual(new InvalidFieldError('errors.passwordStrength'))
  })

  /* test('Should return error if password doesnt have lowercase letters', () => {
    const field = `${faker.random.word().toUpperCase()}${specialCharacters}`
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError('errors.passwordStrength'))
  }) */

  // test('Should return error if password doesnt have numbers or special characters', () => {
  //   const field = faker.database.column()
  //   const password = `${faker.random
  //     .word()
  //     .toUpperCase()}${faker.random.word().toLowerCase()}`

  //   const sut = makeSut(field)
  //   const error = sut.validate({ [field]: password })
  //   expect(error).toEqual(new InvalidFieldError('errors.passwordStrength'))
  // })

  test('Should return falsy if password is valid', () => {
    const field = faker.database.column()
    const password = `${faker.random.word().toLowerCase()}${faker.random
      .word()
      .toUpperCase()}${faker.datatype.number().toString()}${specialCharacters}`
    const sut = makeSut(field)
    const error = sut.validate({ [field]: password })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if password is empty', () => {
    const field = faker.database.column()

    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toBeFalsy()
  })
})
