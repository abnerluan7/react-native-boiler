import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { TopicModel } from '@/app/domain/models'
import { TopicPostModel } from '@/app/domain/models/topic-post-model'
import {
  AddComment,
  AddTopic,
  DeleteComment,
  DeleteTopic,
  LoadCommentReplies,
  LoadLatestComments,
  LoadTopicList,
  UpdateCommentContent,
  UpdateTopicTitle
} from '@/app/domain/services'

const [
  addTopicService,
  loadTopicListService,
  loadLatestCommentsService,
  addCommentService,
  updateTopicTitleService,
  updateCommentContentService,
  loadCommentRepliesService,
  deleteTopicService,
  deleteCommentService
] = getDependencies<
  [
    AddTopic,
    LoadTopicList,
    LoadLatestComments,
    AddComment,
    UpdateTopicTitle,
    UpdateCommentContent,
    LoadCommentReplies,
    DeleteTopic,
    DeleteComment
  ]
>([
  ServicesTypes.TALK.ADD_TOPIC,
  ServicesTypes.TALK.LOAD_TOPIC_LIST,
  ServicesTypes.TALK.LOAD_LATEST_COMMENTS,
  ServicesTypes.TALK.ADD_COMMENT,
  ServicesTypes.TALK.UPDATE_TOPIC_TITLE,
  ServicesTypes.TALK.UPDATE_COMMENT_CONTENT,
  ServicesTypes.TALK.LOAD_COMMENT_REPLIES,
  ServicesTypes.TALK.DELETE_TOPIC,
  ServicesTypes.TALK.DELETE_COMMENT
])

export const talkEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTopic: builder.mutation<TopicModel, AddTopic.Params>({
      queryFn: async (params) => queryAdapter(addTopicService.add(params))
    }),
    addComment: builder.mutation<TopicPostModel, AddComment.Params>({
      queryFn: async (params) => queryAdapter(addCommentService.add(params)),
      invalidatesTags: (result) => [
        { type: 'Topic', id: result.topicId },
        'LatestCommentList',
        'CommentReplyList'
      ]
    }),
    getTopicList: builder.query<LoadTopicList.Model, LoadTopicList.Params>({
      providesTags: (result) =>
        result?.rows
          ? [
              ...result?.rows.map((row) => ({
                type: 'Topic',
                id: row.id
              })),
              'TopicList'
            ]
          : [],
      queryFn: async (params) => queryAdapter(loadTopicListService.load(params))
    }),
    getLatestComments: builder.query<
      LoadLatestComments.Model,
      LoadLatestComments.Params
    >({
      providesTags: (result) =>
        result?.rows
          ? [
              ...result?.rows.map((row) => ({
                type: 'LatestComment',
                id: row.id
              })),
              'LatestCommentList'
            ]
          : [],
      queryFn: async (params) =>
        queryAdapter(loadLatestCommentsService.load(params))
    }),
    getCommentReplies: builder.query<
      LoadCommentReplies.Model,
      LoadCommentReplies.Params
    >({
      providesTags: (result) =>
        result?.rows
          ? [
              ...result?.rows.map((row) => ({
                type: 'CommentReply',
                id: row.id
              })),
              'CommentReplyList'
            ]
          : [],
      queryFn: async (params) =>
        queryAdapter(loadCommentRepliesService.load(params))
    }),
    updateTopicTitle: builder.mutation<
      UpdateTopicTitle.Model,
      UpdateTopicTitle.Params
    >({
      queryFn: async (params) =>
        queryAdapter(updateTopicTitleService.update(params)),
      invalidatesTags: (result) => [
        {
          type: 'Topic',
          id: result.id
        },
        'TopicList'
      ]
    }),
    updateCommentContent: builder.mutation<
      UpdateCommentContent.Model,
      UpdateCommentContent.Params
    >({
      queryFn: async (params) =>
        queryAdapter(updateCommentContentService.update(params)),
      invalidatesTags: (result) => [
        {
          type: 'LatestComment',
          id: result.id
        },
        {
          type: 'CommentReply',
          id: result.id
        }
      ]
    }),
    deleteTopic: builder.mutation<DeleteTopic.Model, DeleteTopic.Params>({
      queryFn: async (params) =>
        queryAdapter(deleteTopicService.delete(params)),
      invalidatesTags: () => ['TopicList']
    }),
    deleteComment: builder.mutation<DeleteComment.Model, DeleteComment.Params>({
      queryFn: async (params) =>
        queryAdapter(deleteCommentService.delete(params)),
      invalidatesTags: (result) => [
        {
          type: 'LatestComment',
          id: result.id
        },
        {
          type: 'CommentReply',
          id: result.id
        },
        'CommentReplyList',
        'LatestCommentList'
      ]
    })
  })
})
