export interface FieldValidation {
  field: string
  validate: (input: FieldValidation.Params, ...args: unknown[]) => Error
}

export namespace FieldValidation {
  export type Params = ObjectParams | ArrayParams

  export type ObjectParams = {
    [field: string]: string
  }

  export type ArrayParams = {
    [field: string]: ObjectParams[]
  }
}
