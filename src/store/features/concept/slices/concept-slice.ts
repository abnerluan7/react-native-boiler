import {
  AsyncThunk,
  createSlice,
  PayloadAction,
  SliceCaseReducers
} from '@reduxjs/toolkit'
import { v4 } from 'uuid'

import {
  CONCEPT_SLICE_NAME,
  ConceptSliceStateTypes,
  ConceptSliceStateKeys,
  ConceptModelKeyName,
  ADD_OPEN_QUESTION_TO_HYPOTHESIS,
  ADD_PROOF_CARD_TO_HYPOTHESIS,
  SET_CONCEPT_DATA
} from '@/store/features/concept'
import { AppDispatch, AppState } from '@/store/types'
import { QueryStatusList } from '@/store/types/common'

import { ConceptModel, HypothesisModel } from '@/app/domain/models'

import {
  addOpenQuestionToHypothesisReducer,
  addProofCardToHypothesisReducer,
  setConceptDataReducer
} from '../actions'
import { addDebateToHypothesisReducer } from '../actions/add-debate-to-hypothesis'
import { publishConceptThunk } from '../thunks'
import { ADD_DEBATE_TO_HYPOTHESIS } from '../types'

type ConceptSliceParams = {
  deleteHypothesis: AsyncThunk<
    string,
    string,
    {
      dispatch: AppDispatch
      state: AppState
    }
  >
}

export const conceptSlice = ({ deleteHypothesis }: ConceptSliceParams) =>
  createSlice<
    ConceptSliceStateTypes,
    SliceCaseReducers<ConceptSliceStateTypes>
  >({
    name: CONCEPT_SLICE_NAME,
    initialState: {
      concept: {
        data: null,
        error: null,
        status: QueryStatusList.IDLE,
        preventLoading: false
      },
      delete: {
        data: null,
        error: null,
        status: QueryStatusList.IDLE,
        preventLoading: false
      },
      publish: {
        data: null,
        error: null,
        preventLoading: false,
        status: QueryStatusList.IDLE
      },
      draft: null
    },
    reducers: {
      [ADD_OPEN_QUESTION_TO_HYPOTHESIS]: addOpenQuestionToHypothesisReducer,
      [ADD_DEBATE_TO_HYPOTHESIS]: addDebateToHypothesisReducer,
      [ADD_PROOF_CARD_TO_HYPOTHESIS]: addProofCardToHypothesisReducer,
      [SET_CONCEPT_DATA]: setConceptDataReducer,
      editDraftHypothesisContent: (
        state,
        {
          payload: { contentHTML, index }
        }: PayloadAction<{
          contentHTML: HypothesisModel['contentHTML']
          index: number
        }>
      ) => {
        state.draft.hypotheses[index].contentHTML = contentHTML
      },
      editDraftHypothesisTitle: (
        state,
        {
          payload: { title, index }
        }: PayloadAction<{
          title: HypothesisModel['title']
          index: number
        }>
      ) => {
        state.draft.hypotheses[index].title = title
      },
      addDraftHypothesis: (state, { payload }: PayloadAction<number>) => {
        const baseHypothesis = {
          id: v4(),
          ordering: payload + 1,
          conceptId: state.concept.data.id,
          title: '',
          subTitle: '',
          displayTitle: '',
          contentHTML: [] as any[]
        }
        state.draft.hypotheses.splice(payload, 0, baseHypothesis)
      },
      deleteDraftHypothesis: (state, { payload }: PayloadAction<number>) => {
        state.draft.hypotheses.splice(payload, 1)
      },
      preventConceptLoading: (
        state,
        action: PayloadAction<ConceptSliceStateKeys.CONCEPT>
      ) => {
        state[action.payload].preventLoading = true
      },
      setConceptStatus: (
        state,
        action: PayloadAction<{
          type: Exclude<ConceptSliceStateKeys, 'draft'>
          status: QueryStatusList
        }>
      ) => {
        state[action.payload.type].status = action.payload.status
      },
      setDraftKeyValue: (
        state,
        action: PayloadAction<{
          key: ConceptModelKeyName
          value: string
        }>
      ) => {
        const newDraft: ConceptModel = {
          ...state.draft,
          [action.payload.key]: action.payload.value
        }

        state.draft = { ...newDraft }
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(deleteHypothesis.pending, (state) => {
          state.delete.error = ''
          state.delete.status = QueryStatusList.LOADING
        })
        .addCase(deleteHypothesis.fulfilled, (state, { payload }) => {
          const draftIndex = state.draft.hypotheses.findIndex(
            (hypothesis) => hypothesis.id === payload
          )
          const conceptIndex = state.concept.data.hypotheses.findIndex(
            (hypothesis) => hypothesis.id === payload
          )
          state.draft.hypotheses.splice(draftIndex, 1)
          state.concept.data.hypotheses.splice(conceptIndex, 1)
          state.delete.preventLoading = false
          state.delete.status = QueryStatusList.SUCCESS
        })
        .addCase(deleteHypothesis.rejected, (state, { error }) => {
          state.delete.error = error.message
          state.delete.status = QueryStatusList.ERROR
        })
      builder
        .addCase(publishConceptThunk.pending, (state) => {
          state.publish.error = ''
          state.publish.status = QueryStatusList.LOADING
        })
        .addCase(publishConceptThunk.fulfilled, (state) => {
          state.publish.preventLoading = false
          state.publish.status = QueryStatusList.SUCCESS
        })
        .addCase(publishConceptThunk.rejected, (state, { error }) => {
          state.publish.error = error.message
          state.publish.status = QueryStatusList.ERROR
        })
    }
  })
