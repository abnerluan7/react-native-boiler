import {
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  Draft,
  PayloadAction
} from '@reduxjs/toolkit'

export type ActionReducerFunction<T, S> = {
  action: ActionCreatorWithOptionalPayload<T>
  reducer: (state: S, payload: PayloadAction<T>) => void
}

export type ActionCreatorPayload<T> = T extends void
  ? ActionCreatorWithoutPayload
  : ActionCreatorWithPayload<T>

export type ReducerFunction<S, T> = (
  state: Draft<S>,
  payload: PayloadAction<T>
) => void
