import faker from 'faker'

import { InvalidFieldError } from '@/app/validation/errors'

import { URLValidation } from './url-validation'

const makeSut = (field: string): URLValidation => new URLValidation(field)

describe('URLValidation', () => {
  test('Should return error if url is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError('errors.invalidURL'))
  })

  test('Should return falsy if url is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.url() })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if url is empty', () => {
    const field = faker.database.column()

    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toBeFalsy()
  })
})
