import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import {
  AddFunding,
  ApplyForFunding,
  LoadInvestorFundingApplicationList,
  LoadOpenQuestionFundingCandidateList,
  LoadResearcherFundingApplicationList,
  ReconsiderCandidateFunding,
  UpdateCandidateFundingStatus,
  UpdateFundingStatus
} from '@/app/domain/services'

const [
  addFundingService,
  updateFundingStatusService,
  applyForFundingService,
  loadInvestorFundingApplicationListService,
  loadOpenQuestionFundingCandidateListService,
  loadResearcherFundingApplicationListService,
  updateCandidateFundingStatusService,
  reconsiderCandidateFundingService
] = getDependencies<
  [
    AddFunding,
    UpdateFundingStatus,
    ApplyForFunding,
    LoadInvestorFundingApplicationList,
    LoadOpenQuestionFundingCandidateList,
    LoadResearcherFundingApplicationList,
    UpdateCandidateFundingStatus,
    ReconsiderCandidateFunding
  ]
>([
  ServicesTypes.FUNDINGS.ADD_FUNDING,
  ServicesTypes.FUNDINGS.UPDATE_FUNDING_STATUS,
  ServicesTypes.FUNDINGS.APPLY_FOR_FUNDING,
  ServicesTypes.FUNDINGS.LOAD_INVESTOR_FUNDING_APPLICATION_LIST,
  ServicesTypes.FUNDINGS.LOAD_OPEN_QUESTION_FUNDING_CANDIDATE_LIST,
  ServicesTypes.FUNDINGS.LOAD_RESEARCHER_FUNDING_APPLICATION_LIST,
  ServicesTypes.FUNDINGS.UPDATE_CANDIDATE_FUNDING_STATUS,
  ServicesTypes.FUNDINGS.RECONSIDER_CANDIDATE_FUNDING
])

export const fundingsEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFunding: builder.mutation<AddFunding.Model, AddFunding.Params>({
      queryFn: async (params) => queryAdapter(addFundingService.update(params)),
      invalidatesTags: (result) => [{ type: 'OpenQuestion', id: result.id }]
    }),
    updateFundingStatus: builder.mutation<
      UpdateFundingStatus.Model,
      UpdateFundingStatus.Params
    >({
      queryFn: async (params) =>
        queryAdapter(updateFundingStatusService.update(params)),
      invalidatesTags: (result) =>
        result?.id
          ? [
              { type: 'OpenQuestion', id: result.id },
              { type: 'InvestorFundingApplication', id: result.fundingId }
            ]
          : []
    }),
    applyForFunding: builder.mutation<
      ApplyForFunding.Model,
      ApplyForFunding.Params
    >({
      queryFn: async (params) =>
        queryAdapter(applyForFundingService.update(params)),
      invalidatesTags: (result) => [{ type: 'OpenQuestion', id: result.id }]
    }),
    loadInvestorFundingApplicationList: builder.query<
      LoadInvestorFundingApplicationList.Model,
      LoadInvestorFundingApplicationList.Params
    >({
      queryFn: async (params) =>
        queryAdapter(loadInvestorFundingApplicationListService.load(params)),
      providesTags: (result) =>
        result?.rows
          ? result.rows.map((row) => ({
              type: 'InvestorFundingApplication',
              id: row.id
            }))
          : []
    }),
    loadOpenQuestionFundingCandidateList: builder.query<
      LoadOpenQuestionFundingCandidateList.Model,
      LoadOpenQuestionFundingCandidateList.Params
    >({
      queryFn: async (params) =>
        queryAdapter(loadOpenQuestionFundingCandidateListService.load(params)),
      providesTags: (result) =>
        result?.rows
          ? result.rows.map((row) => ({
              type: 'OpenQuestionFundingCandidate',
              id: row.id
            }))
          : []
    }),
    loadResearcherFundingApplicationList: builder.query<
      LoadResearcherFundingApplicationList.Model,
      LoadResearcherFundingApplicationList.Params
    >({
      queryFn: async (params) =>
        queryAdapter(loadResearcherFundingApplicationListService.load(params)),
      providesTags: (result) =>
        result?.rows
          ? result.rows.map((row) => ({
              type: 'ResearherFundingApplication',
              id: row.id
            }))
          : []
    }),
    updateCandidateFundingStatus: builder.mutation<
      UpdateCandidateFundingStatus.Model,
      UpdateCandidateFundingStatus.Params
    >({
      queryFn: async (params) =>
        queryAdapter(updateCandidateFundingStatusService.update(params)),
      invalidatesTags: (result) => [
        { type: 'OpenQuestionFundingCandidate', id: result.candidateId }
      ]
    }),
    reconsiderCandidateFunding: builder.mutation<
      ReconsiderCandidateFunding.Model,
      ReconsiderCandidateFunding.Params
    >({
      queryFn: async (params) =>
        queryAdapter(reconsiderCandidateFundingService.delete(params)),
      invalidatesTags: (result) => [
        { type: 'OpenQuestionFundingCandidate', id: result.candidateId }
      ]
    })
  })
})
