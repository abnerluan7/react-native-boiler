import { createAsyncThunk } from '@reduxjs/toolkit'

import { ProofCardModel } from '@/app/domain/models'
import { UpdateProofCard } from '@/app/domain/services'

type Payload = {
  publishProofcard: UpdateProofCard
}

export const publishProofcardThunk = ({ publishProofcard }: Payload) =>
  createAsyncThunk(null, async (proofCard: ProofCardModel) => {
    const responseOrError = await publishProofcard.update(proofCard)

    if (responseOrError.isSuccess()) {
      return null
    }
    throw responseOrError.value
  })
