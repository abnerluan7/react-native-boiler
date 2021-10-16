import { createAction } from '@reduxjs/toolkit'

import { ConceptSliceStateKeys } from '@/store/features/concept'
import { QueryStatusList } from '@/store/types/common'

export const setConceptStatus = createAction<{
  type: Exclude<ConceptSliceStateKeys, 'draft'>
  status: QueryStatusList
}>('@concept/setConceptStatus')
