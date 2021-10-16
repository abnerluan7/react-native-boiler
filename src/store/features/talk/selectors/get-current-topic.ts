import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '@/store/types'

const subjectSelector = (state: AppState) => state.talk.subjects

export const getCurrentTopicByIndexSelector = (index: number) =>
  createSelector(subjectSelector, (state) => {
    const currentTopic = state[index].currentTopic
    return {
      ...currentTopic
    }
  })
