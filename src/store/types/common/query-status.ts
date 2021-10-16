export enum QueryStatusList {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type QueryManagementType<T> = {
  data: T
  status: QueryStatusList
  error: string
  preventLoading: boolean
}
