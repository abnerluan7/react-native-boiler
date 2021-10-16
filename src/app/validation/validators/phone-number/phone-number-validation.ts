import { GooglePhoneFormatter } from '@/app/infra/formatter'

import { InvalidFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

import { PhoneValidator } from '@/app/presentation/common/protocols'

export class PhoneNumberValidation implements FieldValidation {
  countryCode: string
  constructor(
    readonly field: string,
    readonly phoneFormatter: PhoneValidator = new GooglePhoneFormatter()
  ) {}

  validate(input: FieldValidation.ObjectParams): Error {
    if (!input[this.field]) return null

    const code = input[`${this.field}CountryCode`]

    this.countryCode = code

    if (!this.countryCode) {
      return new InvalidFieldError('errors.invalidPhoneNumber')
    }

    return this.phoneFormatter.validate(input[this.field], this.countryCode)
      ? null
      : new InvalidFieldError('errors.invalidPhoneNumber')
  }
}
