import { createAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ToastSliceState, ToastTypes } from '../types'
import { TOAST_REDUCER_KEYS } from '../types/toast-constants'

type Payload = {
  text: string
  type: ToastTypes
}

export const addToast: ActionCreatorPayload<Payload> = createAction(
  TOAST_REDUCER_KEYS.ADD_TOAST
)

export const addToastReducer: ReducerFunction<ToastSliceState, Payload> = (
  state,
  action
) => {
  state.toasts.push({
    id: v4(),
    ...action.payload
  })
}
