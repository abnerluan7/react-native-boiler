import { InvalidFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

export class URLValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.ObjectParams): Error {
    const urlRegex =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
    return !input[this.field] || urlRegex.test(input[this.field])
      ? null
      : new InvalidFieldError('errors.invalidURL')
  }
}
