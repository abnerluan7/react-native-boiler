import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { PaginatedParams } from '@/app/domain/common/types'
import { OngoingResearchModel } from '@/app/domain/models'
import {
  AddOngoingResearch,
  LoadOngoingResearch,
  LoadOngoingResearchList,
  UpdateOngoingResearch
} from '@/app/domain/services'

import { setOngoingResearchData } from '../actions'

const [
  loadOngoingResearchService,
  updateOngoingResearchService,
  addOngoingResearchService,
  loadOngoingResearchListService
] = getDependencies<
  [
    LoadOngoingResearch,
    UpdateOngoingResearch,
    AddOngoingResearch,
    LoadOngoingResearchList
  ]
>([
  ServicesTypes.ONGOING_RESEARCH.LOAD_ONGOING_RESEARCH,
  ServicesTypes.ONGOING_RESEARCH.UPDATE_ONGOING_RESEARCH,
  ServicesTypes.ONGOING_RESEARCH.ADD_ONGOING_RESEARCH,
  ServicesTypes.ONGOING_RESEARCH.LOAD_ONGOING_RESEARCH_LIST
])

export const ongoingResearchEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOngoingResearch: builder.query<OngoingResearchModel, string>({
      providesTags: (result) => [{ type: 'OngoingResearch', id: result.id }],
      queryFn: async (id) => queryAdapter(loadOngoingResearchService.load(id)),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const payload = (await queryFulfilled).data
        dispatch(setOngoingResearchData(payload))
      }
    }),
    getOngoingResearchList: builder.query<
      LoadOngoingResearchList.Model,
      PaginatedParams
    >({
      queryFn: async (params) =>
        queryAdapter(loadOngoingResearchListService.load(params)),
      providesTags: (result) =>
        result?.rows
          ? [
              ...result.rows.map((row) => ({
                type: 'OngoingResearch',
                id: row.id
              })),
              'OngoingResearchList'
            ]
          : []
    }),
    updateOngoingResearch: builder.mutation<
      UpdateOngoingResearch.Model,
      UpdateOngoingResearch.Params
    >({
      queryFn: async (params: UpdateOngoingResearch.Params) =>
        queryAdapter(updateOngoingResearchService.update(params)),
      invalidatesTags: (result) => [
        { type: 'OngoingResearch', id: result.id },
        ...result.openQuestionIds.map((id) => ({
          type: 'OpenQuestion',
          id
        }))
      ]
    }),
    addOngoingResearch: builder.mutation<void, OngoingResearchModel>({
      queryFn: async (params) =>
        queryAdapter(addOngoingResearchService.add(params))
    })
  })
})
