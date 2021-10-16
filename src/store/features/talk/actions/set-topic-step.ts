import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { TALK_REDUCER_KEYS, TalkStepTypes, TalkSliceState } from '../types'

type Payload = {
  step: TalkStepTypes
  index: number
}

export const setTopicStep: ActionCreatorPayload<Payload> = createAction(
  TALK_REDUCER_KEYS.SET_TOPIC_STEP
)

export const setTopicStepReducer: ReducerFunction<TalkSliceState, Payload> = (
  state,
  { payload }
) => {
  state.subjects[payload.index].step.prev =
    state.subjects[payload.index].step.current
  state.subjects[payload.index].step.current = payload.step
}
