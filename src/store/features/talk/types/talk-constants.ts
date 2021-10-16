import { TalkSliceState, TalkStepTypes } from '@/store/features/talk'
import { TopicType } from '@/store/features/talk/types'

import { TopicTypes } from '@/app/domain/models'

export const TALK_SLICE_NAME = '@Talk'

export const RESET_TALK_STATE = 'resetTalkState'
export const SET_TOPIC_STEP = 'setTopicStep'
export const SET_TOPIC_FORM = 'setTopicForm'
export const SET_CURRENT_TOPIC = 'setCurrentTopic'
export const INITIALIZE_TOPIC_FORM = 'initializeTopicForm'

export const TALK_REDUCER_KEYS = {
  RESET_TALK_STATE: `${TALK_SLICE_NAME}/${RESET_TALK_STATE}`,
  SET_TOPIC_FORM: `${TALK_SLICE_NAME}/${SET_TOPIC_FORM}`,
  SET_CURRENT_TOPIC: `${TALK_SLICE_NAME}/${SET_CURRENT_TOPIC}`,
  SET_TOPIC_STEP: `${TALK_SLICE_NAME}/${SET_TOPIC_STEP}`,
  INITIALIZE_TOPIC_FORM: `${TALK_SLICE_NAME}/${INITIALIZE_TOPIC_FORM}`
}

export const TOPIC_INITIAL_STATE: TopicType = {
  topicType: null,
  hypothesisId: '',
  conceptId: '',
  title: '',
  content: '',
  id: '',
  createdDate: '',
  deletedDate: '',
  subjectId: ''
}

export const INTERNAL_SUBJECT_INITIAL_STATE = {
  newTopic: {
    id: '',
    conceptId: '',
    hypothesisId: '',
    title: '',
    content: '',
    createdDate: '',
    deletedDate: '',
    topicType: '' as keyof typeof TopicTypes,
    subjectId: ''
  },
  step: {
    current: 'list' as TalkStepTypes,
    prev: null as TalkStepTypes
  },
  currentTopic: null as TopicType,
  topics: [] as TopicType[]
}

export const TALK_INITIAL_STATE: TalkSliceState = {
  subjects: [{ ...INTERNAL_SUBJECT_INITIAL_STATE }]
}
