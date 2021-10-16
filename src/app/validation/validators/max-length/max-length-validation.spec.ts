import faker from 'faker'

import { InvalidFieldError } from '@/app/validation/errors'

import { MaxLengthValidation } from './max-length-validation'

const makeSut = (field: string): MaxLengthValidation =>
  new MaxLengthValidation(field, 300)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(301) })
    expect(error).toEqual(
      new InvalidFieldError(
        JSON.stringify({
          error: 'errors.maxLength',
          option: { length: 300 }
        })
      )
    )
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({
      [field]: faker.random.alphaNumeric(faker.datatype.number(299))
    })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exists in schema', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate({
      [faker.database.column()]: faker.random.alphaNumeric(5)
    })
    expect(error).toBeFalsy()
  })
})
