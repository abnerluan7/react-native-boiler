import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { DEBATE_REDUCER_KEYS, DebateSliceState } from '../types'

type Payload = {
  breadcrumb: {
    text: string
    inputName: string
  }
}

export const setPreviewResourceBreadcrumb: ActionCreatorPayload<Payload> =
  createAction(DEBATE_REDUCER_KEYS.SET_PREVIEW_RESOURCE_BREADCRUMB)

export const setPreviewResourceBreadcrumbReducer: ReducerFunction<
  DebateSliceState,
  Payload
> = (state, action) => {
  state.breadcrumb = action.payload.breadcrumb
}
