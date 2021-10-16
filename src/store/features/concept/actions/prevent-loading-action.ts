import { createAction } from '@reduxjs/toolkit'

import { ConceptSliceStateKeys } from '@/store/features/concept'

export const preventConceptLoading = createAction<
  Exclude<ConceptSliceStateKeys, 'draft'>
>('@concept/preventConceptLoading')
