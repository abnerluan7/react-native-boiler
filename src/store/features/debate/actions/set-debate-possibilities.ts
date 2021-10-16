import { createAction } from '@reduxjs/toolkit'
import _cloneDeep from 'lodash.clonedeep'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { PossibilityModel } from '@/app/domain/models'

import { DEBATE_REDUCER_KEYS, DebateSliceState } from '../types'

type Payload = {
  possibilities: PossibilityModel[]
}

export const setDebatePossibilities: ActionCreatorPayload<Payload> =
  createAction(DEBATE_REDUCER_KEYS.SET_DEBATE_POSSIBILITIES)

export const setDebatePossibilitiesReducer: ReducerFunction<
  DebateSliceState,
  Payload
> = (state, action) => {
  const possibilities = _cloneDeep(
    action.payload.possibilities.map((possibility) => ({
      ...possibility,
      arguments: possibility.arguments.map((argument) => ({
        ...argument,
        counterArguments:
          argument.counterArguments?.filter(
            (counterArgument) => !!counterArgument.counterArgument
          ) ?? []
      }))
    }))
  )

  state.draft.possibilities = possibilities
}
