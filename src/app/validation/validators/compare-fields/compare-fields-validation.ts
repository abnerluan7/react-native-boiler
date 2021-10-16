import { InvalidFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate(input: FieldValidation.ObjectParams): Error {
    return input[this.field] !== input[this.fieldToCompare]
      ? new InvalidFieldError('errors.mismatchField')
      : null
  }
}
