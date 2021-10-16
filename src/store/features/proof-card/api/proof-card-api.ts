import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { ProofCardModel } from '@/app/domain/models'
import {
  DeleteProofCard,
  LoadProofCard,
  LoadProofCardCount,
  LoadResourcesCount,
  UpdateProofCard
} from '@/app/domain/services'

const [
  loadResourcesCountService,
  loadProofCardCountService,
  deleteProofCardService,
  loadProofCardService,
  updateProofCardService
] = getDependencies<
  [
    LoadResourcesCount,
    LoadProofCardCount,
    DeleteProofCard,
    LoadProofCard,
    UpdateProofCard
  ]
>([
  ServicesTypes.RESOURCES.LOAD_RESOURCES_COUNT,
  ServicesTypes.PROOF_CARD.LOAD_PROOF_CARD_COUNT,
  ServicesTypes.PROOF_CARD.DELETE_PROOF_CARD,
  ServicesTypes.PROOF_CARD.LOAD_PROOF_CARD,
  ServicesTypes.PROOF_CARD.UPDATE_PROOF_CARD
])

export const proofCardEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProofCard: builder.query<ProofCardModel, string>({
      queryFn: async (id) => queryAdapter(loadProofCardService.load(id)),
      providesTags: (result) =>
        result?.id ? [{ type: 'ProofCard', id: result.id }] : []
    }),
    updateProofCard: builder.mutation<UpdateProofCard.Model, ProofCardModel>({
      queryFn: async (id) => queryAdapter(updateProofCardService.update(id)),
      invalidatesTags: (result) => [{ type: 'ProofCard', id: result.id }]
    }),
    getResourcesCount: builder.query<number, void>({
      queryFn: async () => queryAdapter(loadResourcesCountService.load()),
      providesTags: ['ResourcesCount']
    }),
    getProofCardCount: builder.query<number, void>({
      queryFn: async () => queryAdapter(loadProofCardCountService.load()),
      providesTags: ['ProofCardCount']
    }),
    deleteProofCard: builder.mutation<
      DeleteProofCard.Model,
      DeleteProofCard.Params
    >({
      queryFn: async (params) =>
        queryAdapter(deleteProofCardService.delete(params)),
      invalidatesTags: (result) => [{ type: 'Concept', id: result.conceptId }]
    })
  })
})
