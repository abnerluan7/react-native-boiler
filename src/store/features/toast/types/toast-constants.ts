import { ToastSliceState } from './toast-types'

export const TOAST_SLICE_NAME = '@Toast'

export const ADD_TOAST = `addToast`
export const REMOVE_TOAST = `removeToast`

export const TOAST_REDUCER_KEYS = {
  ADD_TOAST: `${TOAST_SLICE_NAME}/${ADD_TOAST}`,
  REMOVE_TOAST: `${TOAST_SLICE_NAME}/${REMOVE_TOAST}`
}

export const toastInitialState: ToastSliceState = {
  toasts: []
}
