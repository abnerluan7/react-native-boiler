import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit'

import { CONCEPT_REDUCER_KEYS } from '@/store/features/concept'
import { AppState } from '@/store/types'

import { ConceptModel } from '@/app/domain/models'
import { DeleteHypothesis } from '@/app/domain/services'

type DeleteHypothesisParams = {
  deleteHypothesis: DeleteHypothesis
  fetchConcept: AsyncThunk<ConceptModel, string, {}>
}

export const deleteHypothesisThunk = ({
  deleteHypothesis
}: DeleteHypothesisParams) =>
  createAsyncThunk<
    string,
    string,
    {
      state: AppState
    }
  >(
    CONCEPT_REDUCER_KEYS.DELETE_HYPOTHESIS,
    async (id: string, { getState }) => {
      const currentHypothesis = getState().concept.concept.data.hypotheses.find(
        (hypothesis) => hypothesis.id === id
      )

      if (currentHypothesis) {
        const responseOrError = await deleteHypothesis.delete(id)

        if (responseOrError.isSuccess()) {
          return id
        }
      } else {
        return id
      }
    }
  )
