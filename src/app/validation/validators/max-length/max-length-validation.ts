import { InvalidFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

export class MaxLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly maxLength: number) {}

  validate(input: FieldValidation.ObjectParams): Error {
    const inputData = input[this.field] as string
    return inputData?.length > this.maxLength
      ? new InvalidFieldError(
          JSON.stringify({
            error: 'errors.maxLength',
            option: { length: this.maxLength }
          })
        )
      : null
  }
}
