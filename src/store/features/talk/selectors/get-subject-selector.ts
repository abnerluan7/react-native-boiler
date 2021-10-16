import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '@/store/types'

const subjectSelector = (state: AppState) => state.talk.subjects

export const getSubjectByIndexSelector = (index: number) =>
  createSelector(subjectSelector, (state) => {
    const subject = state[index]
    return {
      ...subject
    }
  })
