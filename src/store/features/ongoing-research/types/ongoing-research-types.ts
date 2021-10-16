import { OngoingResearchModel } from '@/app/domain/models'

export type OngoingResearchSliceStateTypes = {
  fragment: string
  conceptId: string
  openQuestionId: string
  hypothesisId: string
  original: OngoingResearchModel
  draft: OngoingResearchModel
  step: {
    prev: 'basic' | 'research-stages' | 'summary'
    current: 'basic' | 'research-stages' | 'summary'
  }
}
