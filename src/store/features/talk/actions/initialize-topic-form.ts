import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  TALK_REDUCER_KEYS,
  TalkSliceState,
  TopicType,
  INTERNAL_SUBJECT_INITIAL_STATE
} from '../types'

type Payload = { newTopic?: Partial<TopicType>; index: number }

export const initializeTopicForm: ActionCreatorPayload<Payload> = createAction(
  TALK_REDUCER_KEYS.INITIALIZE_TOPIC_FORM
)

export const initializeTopicFormReducer: ReducerFunction<
  TalkSliceState,
  Payload
> = (state, { payload }) => {
  if (state.subjects[payload.index] === undefined) {
    state.subjects.push(
      payload.newTopic
        ? {
            ...INTERNAL_SUBJECT_INITIAL_STATE,
            newTopic: {
              ...INTERNAL_SUBJECT_INITIAL_STATE.newTopic,
              ...payload.newTopic
            }
          }
        : { ...INTERNAL_SUBJECT_INITIAL_STATE }
    )
  } else {
    state.subjects[payload.index] = payload.newTopic
      ? {
          ...INTERNAL_SUBJECT_INITIAL_STATE,
          newTopic: {
            ...INTERNAL_SUBJECT_INITIAL_STATE.newTopic,
            ...payload.newTopic
          }
        }
      : { ...INTERNAL_SUBJECT_INITIAL_STATE }
  }
}
