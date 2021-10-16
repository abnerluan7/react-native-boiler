import { createAsyncThunk } from '@reduxjs/toolkit'

import { getDependency } from '@/ioc/helpers'
import { ServicesTypes } from '@/ioc/types'

import { LoadOpenQuestion } from '@/app/domain/services'

import { OpenQuestionReducerKeys } from '../types'

const loadOpenQuestionService = getDependency<LoadOpenQuestion>(
  ServicesTypes.OPEN_QUESTION.LOAD_OPEN_QUESTION
)

export const loadOpenQuestion = createAsyncThunk(
  OpenQuestionReducerKeys.LOAD_OPEN_QUESTION,
  async (id: string, { rejectWithValue }) => {
    const responseOrError = await loadOpenQuestionService.load(id)

    if (responseOrError.isSuccess()) {
      return responseOrError.value
    }
    return rejectWithValue(responseOrError.value)
  }
)
