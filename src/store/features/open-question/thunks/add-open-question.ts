import { createAsyncThunk } from '@reduxjs/toolkit'

import { getDependency } from '@/ioc/helpers'
import { ServicesTypes } from '@/ioc/types'

import { OpenQuestionModel } from '@/app/domain/models'
import { AddOpenQuestion } from '@/app/domain/services'

import { OpenQuestionReducerKeys } from '../types'

const addOpenQuestionService = getDependency<AddOpenQuestion>(
  ServicesTypes.OPEN_QUESTION.ADD_OPEN_QUESTION
)

export const addAddOpenQuestion = createAsyncThunk(
  OpenQuestionReducerKeys.ADD_OPEN_QUESTION,
  async (params: OpenQuestionModel, { rejectWithValue }) => {
    const responseOrError = await addOpenQuestionService.add(params)

    if (responseOrError.isSuccess()) {
      return responseOrError.value
    }
    return rejectWithValue(responseOrError.value)
  }
)
