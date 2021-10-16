import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { TALK_REDUCER_KEYS, TALK_INITIAL_STATE, TalkSliceState } from '../types'

export const resetTalkState: ActionCreatorPayload<void> = createAction(
  TALK_REDUCER_KEYS.RESET_TALK_STATE
)

export const resetTalkStateReducer: ReducerFunction<TalkSliceState, void> = (
  state
) => {
  state = TALK_INITIAL_STATE
  return state
}
