import { createAsyncThunk } from '@reduxjs/toolkit'

import { getDependency } from '@/ioc/helpers'
import { ServicesTypes } from '@/ioc/types'

import { LoadConcept } from '@/app/domain/services'

type FetchConceptParams = {
  loadConcept: LoadConcept
  slice: string
}

const loadConceptService = getDependency<LoadConcept>(
  ServicesTypes.CONCEPT.LOAD_CONCEPT
)

export const fetchConcept = ({ slice }: FetchConceptParams) =>
  createAsyncThunk(slice, async (id: string) => {
    const responseOrError = await loadConceptService.load(id)

    if (responseOrError.isSuccess()) {
      return responseOrError.value
    }
  })
