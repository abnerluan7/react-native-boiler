import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import { addToastReducer, removeToastReducer } from '../actions'
import { ToastSliceState } from '../types'
import {
  ADD_TOAST,
  REMOVE_TOAST,
  TOAST_SLICE_NAME
} from '../types/toast-constants'

export const ToastSlice = createSlice<
  ToastSliceState,
  SliceCaseReducers<ToastSliceState>
>({
  name: TOAST_SLICE_NAME,
  initialState: {
    toasts: []
  },
  reducers: {
    [ADD_TOAST]: addToastReducer,
    [REMOVE_TOAST]: removeToastReducer
  }
})
