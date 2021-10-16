import { createAction } from '@reduxjs/toolkit'

import { ConceptModelKeyName } from '@/store/features/concept'

export const setDraftKeyValue = createAction<{
  key: ConceptModelKeyName
  value: string
}>('@concept/setDraftKeyValue')
