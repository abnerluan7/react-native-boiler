import { DebateModel } from '@/app/domain/models'
import {
  AddDebate,
  AddVoteToPossibility,
  DeleteDebate,
  DeletePossibilityVote,
  LoadDebate,
  UpdateDebate
} from '@/app/domain/services'
import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'
import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'



const [
  addDebateService,
  loadDebateService,
  addVoteToPossibilityService,
  deletePossibilityVoteService,
  deleteDebateService,
  updateDebate
] = getDependencies<
  [
    AddDebate,
    LoadDebate,
    AddVoteToPossibility,
    DeletePossibilityVote,
    DeleteDebate,
    UpdateDebate
  ]
>([
  ServicesTypes.DEBATE.ADD_DEBATE,
  ServicesTypes.DEBATE.LOAD_DEBATE,
  ServicesTypes.DEBATE.ADD_VOTE_TO_POSSIBILITY,
  ServicesTypes.DEBATE.DELETE_POSSIBILITY_VOTE,
  ServicesTypes.DEBATE.DELETE_DEBATE,
  ServicesTypes.DEBATE.UPDATE_DEBATE
])

export const debateEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDebate: builder.mutation<void, AddDebate.Params>({
      queryFn: async (params) => queryAdapter(addDebateService.add(params))
    }),
    loadDebate: builder.query<DebateModel, string>({
      queryFn: async (params) => queryAdapter(loadDebateService.load(params)),
      providesTags: (result) =>
        result ? [{ type: 'Debate', id: result.id }] : []
    }),
    addVoteToPossibility: builder.mutation<
      AddVoteToPossibility.Model,
      AddVoteToPossibility.Params
    >({
      queryFn: async (params) =>
        queryAdapter(addVoteToPossibilityService.add(params)),
      invalidatesTags: (result) =>
        result ? [{ type: 'Debate', id: result.id }] : []
    }),
    updateDebate: builder.mutation<UpdateDebate.Model, UpdateDebate.Params>({
      queryFn: async (params) => queryAdapter(updateDebate.update(params)),
      invalidatesTags: (result) => [{ id: result.id, type: 'Debate' }]
    }),
    deletePossibilityVote: builder.mutation<
      DeletePossibilityVote.Model,
      DeletePossibilityVote.Params
    >({
      queryFn: async (params) =>
        queryAdapter(deletePossibilityVoteService.delete(params)),
      invalidatesTags: (result) =>
        result ? [{ type: 'Debate', id: result.id }] : []
    }),
    deleteDebate: builder.mutation<DeleteDebate.Model, DeleteDebate.Params>({
      queryFn: async (params) =>
        queryAdapter(deleteDebateService.delete(params)),
      invalidatesTags: (result) =>
        result
          ? [
              { id: result.id, type: 'Debate' },
              { type: 'Concept', id: result.conceptId }
            ]
          : []
    })
  })
})
