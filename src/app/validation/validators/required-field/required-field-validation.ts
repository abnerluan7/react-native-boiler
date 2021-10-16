import { RequiredFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.ObjectParams): Error {
    return input[this.field]
      ? null
      : new RequiredFieldError('errors.requiredField')
  }
}
