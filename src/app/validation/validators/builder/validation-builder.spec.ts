import faker from 'faker'

import {
  RequiredFieldValidation,
  EmailValidation,
  MinLegthValidation
} from '@/app/validation/validators'

import { CompareFieldsValidation } from '../compare-fields/compare-fields-validation'
import { MaxLengthValidation } from '../max-length/max-length-validation'
import { PasswordStrengthValidation } from '../password-strength/password-strength'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLenghValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLegthValidation(field, length)])
  })

  test('Should return MaxLenghValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = sut.field(field).max(length).build()
    expect(validations).toEqual([new MaxLengthValidation(field, length)])
  })

  test('Should return CompareFieldsValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()

    const validations = sut.field(field).sameAs(fieldToCompare).build()

    expect(validations).toEqual([
      new CompareFieldsValidation(field, fieldToCompare)
    ])
  })

  test('Should return PasswordStrengthValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).password().build()
    expect(validations).toEqual([new PasswordStrengthValidation(field)])
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = sut.field(field).required().email().min(length).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinLegthValidation(field, length)
    ])
  })
})
