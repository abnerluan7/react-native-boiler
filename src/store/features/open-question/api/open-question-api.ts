import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { OpenQuestionModel } from '@/app/domain/models'
import {
  AddOpenQuestion,
  AddOpenQuestionVote,
  DeleteOpenQuestion,
  LinkOngoingResearchToOpenQuestion,
  LoadOpenQuestion,
  LoadOpenQuestionList,
  UpdateOpenQuestion,
  UpdateOpenQuestionVote
} from '@/app/domain/services'

import { setOpenQuestionData } from '../actions'

const [
  addOpenQuestionService,
  deleteOpenQuestionService,
  loadOpenQuestionService,
  loadOpenQuestionListService,
  updateOpenQuestion,
  updateOpenQuestionVoteService,
  addOpenQuestionVoteService,
  linkOngoingReserachToOpenQuestionService
] = getDependencies<
  [
    AddOpenQuestion,
    DeleteOpenQuestion,
    LoadOpenQuestion,
    LoadOpenQuestionList,
    UpdateOpenQuestion,
    UpdateOpenQuestionVote,
    AddOpenQuestionVote,
    LinkOngoingResearchToOpenQuestion
  ]
>([
  ServicesTypes.OPEN_QUESTION.ADD_OPEN_QUESTION,
  ServicesTypes.OPEN_QUESTION.DELETE_OPEN_QUESTION,
  ServicesTypes.OPEN_QUESTION.LOAD_OPEN_QUESTION,
  ServicesTypes.OPEN_QUESTION.LOAD_OPEN_QUESTION_LIST,
  ServicesTypes.OPEN_QUESTION.UPDATE_OPEN_QUESTION,
  ServicesTypes.OPEN_QUESTION.UPDATE_OPEN_QUESTION_VOTE,
  ServicesTypes.OPEN_QUESTION.ADD_OPEN_QUESTION_VOTE,
  ServicesTypes.OPEN_QUESTION.LINK_ONGOING_RESEARCH_TO_OPEN_QUESTION
])

export const openQuestionEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOpenQuestion: builder.mutation<AddOpenQuestion.Model, OpenQuestionModel>(
      {
        queryFn: async (params) =>
          queryAdapter(addOpenQuestionService.add(params)),
        invalidatesTags: (result) => [{ type: 'Concept', id: result.conceptId }]
      }
    ),
    deleteOpenQuestion: builder.mutation<
      DeleteOpenQuestion.Model,
      DeleteOpenQuestion.Params
    >({
      queryFn: async (params) =>
        queryAdapter(deleteOpenQuestionService.delete(params)),
      invalidatesTags: (result) => [{ type: 'Concept', id: result.conceptId }]
    }),
    getOpenQuestion: builder.query<OpenQuestionModel, string>({
      providesTags: (result) =>
        result ? [{ type: 'OpenQuestion', id: result.id }] : [],
      queryFn: async (id) => queryAdapter(loadOpenQuestionService.load(id))
      /*       onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        const response = (await queryFulfilled).data
        dispatch(setOpenQuestionData(response))
      } */
    }),
    getOpenQuestionList: builder.query<
      LoadOpenQuestionList.Model,
      LoadOpenQuestionList.Params
    >({
      providesTags: (result) =>
        result?.rows
          ? result?.rows.map((row) => ({
              type: 'OpenQuestionList',
              id: row.id
            }))
          : [],
      queryFn: async (params) =>
        queryAdapter(loadOpenQuestionListService.load(params))
    }),
    updateOpenQuestion: builder.mutation<
      UpdateOpenQuestion.Model,
      OpenQuestionModel
    >({
      queryFn: async (id) => queryAdapter(updateOpenQuestion.update(id)),
      invalidatesTags: (result) => [
        { type: 'OpenQuestion', id: result.id },
        { type: 'Concept', id: result.conceptId }
      ]
    }),
    updateOpenQuestionVote: builder.mutation<
      UpdateOpenQuestionVote.Model,
      UpdateOpenQuestionVote.Params
    >({
      queryFn: async (params) =>
        queryAdapter(updateOpenQuestionVoteService.update(params)),
      invalidatesTags: (result) => [{ type: 'OpenQuestion', id: result.id }]
    }),
    addOpenQuestionVote: builder.mutation<
      AddOpenQuestionVote.Model,
      AddOpenQuestionVote.Params
    >({
      queryFn: async (params) =>
        queryAdapter(addOpenQuestionVoteService.add(params)),
      invalidatesTags: (result) => [{ type: 'OpenQuestion', id: result.id }]
    }),
    linkOngoingResearchToOpenQuestion: builder.mutation<
      LinkOngoingResearchToOpenQuestion.Model,
      LinkOngoingResearchToOpenQuestion.Params
    >({
      queryFn: async (params) =>
        queryAdapter(linkOngoingReserachToOpenQuestionService.update(params)),
      invalidatesTags: (result) => [{ type: 'OpenQuestion', id: result.id }]
    })
  })
})
