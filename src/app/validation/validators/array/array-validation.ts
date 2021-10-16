import { FieldValidation } from '@/app/validation/protocols'

export class ArrayValidation implements FieldValidation {
  constructor(readonly field: string, readonly schema: FieldValidation[]) {}

  validate(inputs: FieldValidation.ArrayParams, fieldName: string): Error {
    const fieldPath = fieldName.split('.')
    const lastPath = fieldPath[fieldPath.length - 1]

    const validations =
      this.schema.filter((item) => lastPath === item.field) ?? []

    const input = {
      [lastPath]: inputs[fieldName]
    }

    if (validations.length > 0) {
      let error: Error
      for (const validation of validations) {
        if (error) return error
        error = validation.validate(input)
      }

      return error
    }

    return undefined
  }
}
