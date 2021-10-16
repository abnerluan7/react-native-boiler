import { QueryManagementType, QueryStatusList } from '../types/common'

export const makeQueryManagementData = <T>(
  initialData?: T extends void ? null : T
): QueryManagementType<T> => ({
  data: initialData,
  error: '',
  preventLoading: false,
  status: QueryStatusList.IDLE
})
