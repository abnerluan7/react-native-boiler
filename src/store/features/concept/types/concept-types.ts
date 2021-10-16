import { QueryManagementType } from '@/store/types/common'

import { ConceptModel } from '@/app/domain/models'

export enum ConceptSliceStateKeys {
  CONCEPT = 'concept',
  DRAFT = 'draft',
  DELETE = 'delete',
  PUBLISH = 'publish'
}

export type ConceptSliceStateTypes = Record<
  ConceptSliceStateKeys.CONCEPT,
  QueryManagementType<ConceptModel>
> &
  Record<ConceptSliceStateKeys.DRAFT, ConceptModel> &
  Record<ConceptSliceStateKeys.DELETE, QueryManagementType<void>> &
  Record<ConceptSliceStateKeys.PUBLISH, QueryManagementType<void>>

export type ConceptModelKeyName = keyof ConceptModel
