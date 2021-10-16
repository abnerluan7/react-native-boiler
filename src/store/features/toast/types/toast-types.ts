export type ToastSliceState = {
  toasts: ToastProps[]
}

export type ToastProps = {
  id: string
  text: string
  type: ToastTypes
  test?: string
}

export type ToastTypes = 'success' | 'error' | 'info'
