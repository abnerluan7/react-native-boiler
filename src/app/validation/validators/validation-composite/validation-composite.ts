import { FieldValidation } from '@/app/validation/protocols'

import { Validation } from '@/app/presentation/common/protocols'

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate(
    fieldName: string,
    input: FieldValidation.Params,
    ...args: unknown[]
  ): string {
    const validators = this.validators.filter((v) =>
      fieldName.includes(v.field)
    )
    for (const validator of validators) {
      const error = validator.validate(input, ...args, fieldName)
      if (error) return error.message
    }
  }
}
