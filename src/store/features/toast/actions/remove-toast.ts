import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ToastSliceState } from '../types'
import { TOAST_REDUCER_KEYS } from '../types/toast-constants'

type Payload = {
  id: string
}

export const removeToast: ActionCreatorPayload<Payload> = createAction(
  TOAST_REDUCER_KEYS.REMOVE_TOAST
)

export const removeToastReducer: ReducerFunction<ToastSliceState, Payload> = (
  state,
  action
) => {
  const filteredToasts = state.toasts.filter(
    (toast) => toast.id !== action.payload.id
  )

  state.toasts = filteredToasts
}
