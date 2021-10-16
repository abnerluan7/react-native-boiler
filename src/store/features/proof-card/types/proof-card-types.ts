import { QueryManagementType } from '@/store/types/common'

import { ProofCardModel } from '@/app/domain/models'

export enum ProofCardStateKeys {
  RESOURCE = 'resourceType',
  STEP = 'step',
  ACTION = 'action',
  DRAFT = 'draft',
  ORIGINAL = 'original',
  CONCEPT_ID = 'conceptId'
}

export type ProofCardStepTypes =
  | 'summary'
  | 'snippet-add'
  | 'snippet-edit'
  | 'start'
  | 'preview'
  | 'copy'
  | 'add'
  | null

export type ProofCardType = {
  resourceType: 'paper' | 'other' | 'media'
  step: {
    current: ProofCardStepTypes
    prev: ProofCardStepTypes
  }
  action: 'add' | 'edit'
  currentResource: string
}

export type ResourceCurrentControl = {
  isCurrent: boolean
}

export type ProofCardSliceStateTypes = {
  [ProofCardStateKeys.ORIGINAL]: QueryManagementType<ProofCardModel>
  [ProofCardStateKeys.DRAFT]: {
    proofCard: ProofCardModel
    resourceControl: ProofCardResourceControlType[]
  }
  [ProofCardStateKeys.CONCEPT_ID]: string
} & ProofCardType

export const ResourcesTypes = ['paper', 'media', 'other']

export type ProofCardResourceControlType = {
  id: string
  isCurrent: boolean
  paperMaxPages?: number
  currentPage?: number
}
