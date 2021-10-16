import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { ConceptModel } from '@/app/domain/models'
import {
  AddConcept,
  DeleteConcept,
  LoadConcept,
  LoadConceptList,
  PublishConcept,
  UpdateConcept,
  VerifyConceptExists
} from '@/app/domain/services'

import { setConceptData } from '../actions'

const [
  loadConceptService,
  loadConceptListService,
  verifyConceptExistsService,
  addConceptService,
  updateConceptService,
  deleteConceptService,
  publishConceptService
] = getDependencies<
  [
    LoadConcept,
    LoadConceptList,
    VerifyConceptExists,
    AddConcept,
    UpdateConcept,
    DeleteConcept,
    PublishConcept
  ]
>([
  ServicesTypes.CONCEPT.LOAD_CONCEPT,
  ServicesTypes.CONCEPT.LOAD_CONCEPT_LIST,
  ServicesTypes.CONCEPT.VERIFY_CONCEPT_EXISTS,
  ServicesTypes.CONCEPT.ADD_CONCEPT,
  ServicesTypes.CONCEPT.UPDATE_CONCEPT,
  ServicesTypes.CONCEPT.DELETE_CONCEPT,
  ServicesTypes.CONCEPT.PUBLISH_CONCEPT
])

export const conceptEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConcept: builder.query<ConceptModel, string>({
      queryFn: async (id: string) => queryAdapter(loadConceptService.load(id)),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const payload = (await queryFulfilled).data
        dispatch(setConceptData(payload))
      },
      providesTags: (result) => [{ type: 'Concept', id: result.id }]
    }),
    getConceptList: builder.query<ConceptModel[], void>({
      queryFn: async () => queryAdapter(loadConceptListService.load()),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'ConceptList', id })),
              'ConceptList'
            ]
          : ['ConceptList']
    }),
    verifyConceptExists: builder.query<boolean, VerifyConceptExists.Params>({
      queryFn: async (params) =>
        queryAdapter(verifyConceptExistsService.load(params)),
      keepUnusedDataFor: 0
    }),
    addConcept: builder.mutation<AddConcept.Model, AddConcept.Params>({
      queryFn: async (params) => queryAdapter(addConceptService.add(params)),
      invalidatesTags: ({ id }) => [
        'ConceptList',
        'CollacardTotalCount',
        { type: 'ConceptCollacardCount', id },
        { type: 'Concept', id }
      ]
    }),
    updateConcept: builder.mutation<UpdateConcept.Model, UpdateConcept.Params>({
      queryFn: async (params) =>
        queryAdapter(updateConceptService.update(params)),
      invalidatesTags: (result) => [
        'ConceptList',
        { type: 'Concept', id: result?.fatherConceptId }
      ]
    }),
    deleteConcept: builder.mutation<DeleteConcept.Model, DeleteConcept.Params>({
      queryFn: async (params) =>
        queryAdapter(deleteConceptService.delete(params)),
      invalidatesTags: ({ id }) => [
        'ConceptList',
        'CollacardTotalCount',
        { type: 'ConceptCollacardCount', id },
        { type: 'Concept', id }
      ]
    }),
    publishConcept: builder.mutation<
      PublishConcept.Model,
      PublishConcept.Params
    >({
      queryFn: async (params) =>
        queryAdapter(publishConceptService.update(params)),
      invalidatesTags: (result) => [
        { type: 'ConceptList', id: result.id },
        { type: 'Concept', id: result.id }
      ]
    })
  })
})
