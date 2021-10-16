import { TopicModel } from '@/app/domain/models'

export type TalkStepTypes = 'list' | 'add-topic' | 'add-reply' | 'view-topic'

export type UserTopicPostType = {
  id?: string
  displayName: string
}

export type TopicPostType = {
  id?: string
  createdDate?: string
  user?: UserTopicPostType
  content: string
  parentPostId?: string
}

export type TopicType = TopicModel

export type TalkSliceState = {
  subjects: Array<{
    newTopic: TopicType
    step: {
      prev: TalkStepTypes
      current: TalkStepTypes
    }
    currentTopic: TopicType
    topics: TopicType[]
  }>
}
