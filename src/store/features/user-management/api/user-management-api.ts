import { getDependencies } from '@/ioc/helpers/get-dependencies'
import { ServicesTypes } from '@/ioc/types'

import { apiSlice } from '@/store/features/api/slice/api-slice'
import { queryAdapter } from '@/store/helpers'

import { PaginatedParams } from '@/app/domain/common/types'
import { RoleFunctionalityModel, UserModel } from '@/app/domain/models'
import {
  LoadRoleFunctionalityList,
  LoadUser,
  LoadUserListByRole,
  LoadUserProfileList,
  LoadUserStatusCount
} from '@/app/domain/services'

const [
  loadUserStatusCountService,
  loadUserService,
  loadUserProfileListService,
  loadUserListByRoleService,
  loadRoleFunctionalityListService
] = getDependencies<
  [
    LoadUserStatusCount,
    LoadUser,
    LoadUserProfileList,
    LoadUserListByRole,
    LoadRoleFunctionalityList
  ]
>([
  ServicesTypes.USER_MANAGEMENT.LOAD_USER_STATUS_COUNT,
  ServicesTypes.USER_MANAGEMENT.LOAD_USER,
  ServicesTypes.USER_MANAGEMENT.LOAD_USER_PROFILE_LIST,
  ServicesTypes.USER_MANAGEMENT.LOAD_USER_LIST_BY_ROLE,
  ServicesTypes.USER_MANAGEMENT.LOAD_ROLE_FUNCTIONALITY_LIST
])

export const userManagementEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserStatusCount: builder.query<
      number,
      LoadUserStatusCount.UserManagementTypes
    >({
      queryFn: async (type) =>
        queryAdapter(loadUserStatusCountService.load(type))
    }),
    getUser: builder.query<UserModel, string>({
      queryFn: async (id: string) => queryAdapter(loadUserService.load({ id })),
      providesTags: (result) => [{ type: 'UserDetail', id: result.id }]
    }),
    getUserProfileList: builder.query<
      LoadUserProfileList.Model,
      PaginatedParams
    >({
      queryFn: async (params) =>
        queryAdapter(loadUserProfileListService.load(params)),
      providesTags: (result) =>
        result?.rows
          ? [
              ...result.rows.map((row) => ({
                type: 'UserProfile',
                id: row.id
              })),
              'UserProfileList'
            ]
          : []
    }),
    getUserListByRole: builder.query<
      LoadUserListByRole.Model,
      LoadUserListByRole.Params
    >({
      queryFn: async (params) =>
        queryAdapter(loadUserListByRoleService.load(params)),
      providesTags: (result) =>
        result?.rows
          ? [
              ...result.rows.map((row) => ({
                type: 'UserDetail',
                id: row.id
              })),
              'UserListByRole'
            ]
          : []
    }),
    getRoleFunctionalityList: builder.query<RoleFunctionalityModel[], void>({
      queryFn: async () =>
        queryAdapter(loadRoleFunctionalityListService.load()),
      keepUnusedDataFor: 600,
      providesTags: (result) =>
        result
          ? [
              ...result.map((row) => ({
                type: 'RoleFunctionality',
                id: row.id
              })),
              'RoleFunctionalityList'
            ]
          : []
    })
  })
})
