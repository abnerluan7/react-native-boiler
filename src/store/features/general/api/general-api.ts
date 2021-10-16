import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { LoadCollacardsCount } from '@/app/domain/services'

const [loadCollacardTotalCountService, loadConceptCollacardCountService] =
  getDependencies<[LoadCollacardsCount, LoadCollacardsCount]>([
    ServicesTypes.GENERAL.LOAD_COLLACARD_TOTAL_COUNT,
    ServicesTypes.GENERAL.LOAD_CONCEPT_COLLACARD_COUNT
  ])

export const generalEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadCollacardTotalCount: builder.query<LoadCollacardsCount.Model, void>({
      queryFn: async () => queryAdapter(loadCollacardTotalCountService.load()),
      providesTags: () => ['CollacardTotalCount']
    }),
    loadConceptCollacardCount: builder.query<
      LoadCollacardsCount.Model,
      LoadCollacardsCount.Params
    >({
      queryFn: async (params) =>
        queryAdapter(loadConceptCollacardCountService.load(params)),
      providesTags: (result) =>
        result ? [{ type: 'ConceptCollacardCount', id: result.id }] : []
    })
  })
})
