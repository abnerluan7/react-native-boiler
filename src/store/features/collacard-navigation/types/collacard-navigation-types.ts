export type CollacardNavigationState = {
  rootConceptId: string
  from: CollacardNavigationFromType
  action: CollacardNavigationActionType
  preventRefetch: boolean
  stack: Array<
    CollacardNavigationFromType & { action: CollacardNavigationActionType }
  >
}

export type CollacardNavigationFromType = {
  id: string
  collacard:
    | 'ongoingResearch'
    | 'openQuestion'
    | 'concept'
    | 'proofCard'
    | 'debate'
  type: 'general' | 'edit'
  action?: CollacardNavigationActionType
}

export type CollacardNavigationActionType = 'add' | 'edit' | 'view'
