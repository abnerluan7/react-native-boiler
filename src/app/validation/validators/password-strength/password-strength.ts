import { InvalidFieldError } from '@/app/validation/errors'
import { FieldValidation } from '@/app/validation/protocols'

export class PasswordStrengthValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: FieldValidation.ObjectParams): Error {
    const passwordRegex =
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    return !input[this.field] || passwordRegex.test(input[this.field])
      ? null
      : new InvalidFieldError('errors.passwordStrength')
  }
}
