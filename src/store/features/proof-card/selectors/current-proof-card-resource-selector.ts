import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

const proofCardSelector = (state: AppState) => state.proofCard

export const currentProofCardResourceSelector = (type: 'draft' | 'original') =>
  createSelector(proofCardSelector, (proofCard) => {
    const {
      draft: { proofCard: draft, resourceControl },
      original: { data: original }
    } = proofCard

    const currentResourceControl = resourceControl.find(
      (resource) => resource.isCurrent
    )

    const availableStates = { draft, original }

    const resource = availableStates[type]?.resources?.find(
      (resource) => resource?.id === currentResourceControl?.id
    )

    return {
      resourceControl: currentResourceControl,
      resource
    }
  })
