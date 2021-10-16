import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { TALK_REDUCER_KEYS, TalkSliceState, TopicType } from '../types'

type Payload = { newTopic: TopicType; index?: number }

export const setTopicForm: ActionCreatorPayload<Payload> = createAction(
  TALK_REDUCER_KEYS.SET_TOPIC_FORM
)

export const setTopicFormReducer: ReducerFunction<TalkSliceState, Payload> = (
  state,
  { payload }
) => {
  let topicIndex
  if (payload.index) {
    topicIndex = payload.index
  } else {
    topicIndex = state.subjects.findIndex(
      ({ newTopic }) => newTopic.id === payload.newTopic.id
    )
  }
  if (topicIndex !== -1) {
    state.subjects[topicIndex].newTopic = payload.newTopic
  }
}
