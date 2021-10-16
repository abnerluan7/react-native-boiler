import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { LoadProofCardList } from '@/app/domain/services'

const [loadProofCardListService] = getDependencies<[LoadProofCardList]>([
  ServicesTypes.PROOF_CARD.LOAD_PROOF_CARD_LIST
])

export const collacardListPreviewEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadProofCardList: builder.query<
      LoadProofCardList.Model,
      LoadProofCardList.Params
    >({
      queryFn: async (params) =>
        queryAdapter(loadProofCardListService.load(params))
    })
  })
})
