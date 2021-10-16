import { AppState } from '@/store/types'

export const ongoingResearchOriginalDataSelector = (state: AppState) =>
  state.ongoingResearch.original
