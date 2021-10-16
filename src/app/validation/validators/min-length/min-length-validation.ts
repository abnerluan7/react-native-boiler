import { InvalidFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

export class MinLegthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}

  validate(input: FieldValidation.ObjectParams): Error {
    return input[this.field]?.length < this.minLength
      ? new InvalidFieldError(
          JSON.stringify({
            error: 'errors.minLength',
            option: { length: this.minLength }
          })
        )
      : null
  }
}
