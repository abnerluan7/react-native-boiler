import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { TALK_REDUCER_KEYS, TalkSliceState, TopicType } from '../types'

type Payload = { topic: TopicType; index: number }

export const setCurrentTopic: ActionCreatorPayload<Payload> = createAction(
  TALK_REDUCER_KEYS.SET_CURRENT_TOPIC
)

export const setCurrentTopicReducer: ReducerFunction<TalkSliceState, Payload> =
  (state, { payload }) => {
    const subject = state.subjects[payload.index]
    if (subject) {
      state.subjects[payload.index].currentTopic = payload.topic
    }
  }
