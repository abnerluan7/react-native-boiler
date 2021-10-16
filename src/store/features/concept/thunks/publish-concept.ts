import { createAsyncThunk } from '@reduxjs/toolkit'

import { getDependency } from '@/ioc/helpers'
import { ServicesTypes } from '@/ioc/types'

import { ConceptModel } from '@/app/domain/models'
import { PublishConcept } from '@/app/domain/services'

import { CONCEPT_REDUCER_KEYS } from '../types'

const publishConceptService = getDependency<PublishConcept>(
  ServicesTypes.CONCEPT.PUBLISH_CONCEPT
)

export const publishConceptThunk = createAsyncThunk(
  CONCEPT_REDUCER_KEYS.PUBLISH_CONCEPT,
  async (concept: ConceptModel) => {
    const responseOrError = await publishConceptService.update(concept)

    if (responseOrError.isSuccess()) {
      return null
    }
    throw responseOrError.value
  }
)
