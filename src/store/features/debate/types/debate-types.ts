import { PossibilityModel } from '@/app/domain/models'

export type StepTypes =
  | 'basic'
  | 'possibilities'
  | 'link-proof-card'
  | 'link-open-question'
  | 'summary'

export type DebateSliceState = {
  draft: {
    id: string
    textFragment: string
    conceptId: string
    hypothesisId: string
    title: string
    reason: string
    possibilities: PossibilityModel[]
  }
  breadcrumb: {
    text: string
    inputName: string
  }
  step: {
    prev: StepTypes
    current: StepTypes
  }
}
