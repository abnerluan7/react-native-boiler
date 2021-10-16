import { OpenQuestionModel } from '@/app/domain/models'

export enum OpenQuestionStateKeys {
  STEP = 'step',
  ORIGINAL = 'original',
  DRAFT = 'draft'
}

export type OpenQuestionSliceStateTypes = {
  [OpenQuestionStateKeys.ORIGINAL]: OpenQuestionModel
  [OpenQuestionStateKeys.DRAFT]: OpenQuestionModel
  [OpenQuestionStateKeys.STEP]: {
    prev: 'basic' | 'add-research' | 'summary'
    current: 'basic' | 'add-research' | 'summary'
  }
}
