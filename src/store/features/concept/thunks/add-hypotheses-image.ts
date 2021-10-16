import { createAsyncThunk } from '@reduxjs/toolkit'

import { CONCEPT_REDUCER_KEYS } from '@/store/features/concept'

import { AddImage } from '@/app/domain/services'

type AddHypothesisImageParams = {
  addHypothesisImage: AddImage
}

export const addHypothesisImageThunk = ({
  addHypothesisImage
}: AddHypothesisImageParams) =>
  createAsyncThunk(
    CONCEPT_REDUCER_KEYS.ADD_HYPOTHESIS_IMAGE,
    async ({ file, id }: { id: string; file: FormData }) => {
      const responseOrError = await addHypothesisImage.add<{ url: string }>({
        file,
        id
      })

      if (responseOrError.isSuccess()) {
        return {
          hypothesisId: id,
          url: responseOrError.value.url
        }
      }
    }
  )
