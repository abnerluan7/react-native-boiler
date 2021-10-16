import { createAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  ONGOING_RESEARCH_REDUCER_KEYS
} from '../types'

type Payload = {
  description: string
}

export const addResearchStage: ActionCreatorPayload<Payload> = createAction(
  ONGOING_RESEARCH_REDUCER_KEYS.ADD_RESEARCH_STAGE
)

export const addResearchStageReducer: ReducerFunction<
  OngoingResearchSliceStateTypes,
  Payload
> = (state, action) => {
  const hasCurrent = !!state.draft.stages.find((stage) => stage.isCurrent)

  state.draft.stages.push({
    id: v4(),
    ordering: state.draft.stages.length + 1,
    description: action.payload.description,
    isCurrent: !hasCurrent
  })
}
