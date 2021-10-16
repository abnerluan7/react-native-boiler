import faker from 'faker'

import { InvalidFieldError } from '@/app/validation/errors'

import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (
  field: string,
  valueToCompare: string
): CompareFieldsValidation => new CompareFieldsValidation(field, valueToCompare)

describe('CompareFieldValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field, faker.random.word())
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError('errors.mismatchField'))
  })

  test('Should return falsy if compare is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const valueToCompare = faker.random.word()
    const sut = makeSut(field, fieldToCompare)

    const error = sut.validate({
      [field]: valueToCompare,
      [fieldToCompare]: valueToCompare
    })
    expect(error).toBeFalsy()
  })
})
