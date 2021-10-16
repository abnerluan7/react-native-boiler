import { createAction } from '@reduxjs/toolkit'

export const deleteDraftHypothesis = createAction<number>(
  '@concept/deleteDraftHypothesis'
)
