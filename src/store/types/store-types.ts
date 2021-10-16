import {AnyAction, Middleware, Dispatch} from '@reduxjs/toolkit';
import {createStore} from '../store';

export enum SliceKeys {
  ROUTER = 'router',
  ARC = 'arc',
  CONCEPT = 'concept',
  PROOF_CARD = 'proofCard',
  OPEN_QUESTION = 'openQuestion',
  ONGOING_RESEARCH = 'ongoingResearch',
  API = 'api',
  TOAST = 'toast',
  COLLACARD_NAVIGATION = 'collacardNavigation',
  DEBATE = 'debate',
  TALK = 'talk',
}

export type StoreProps = {
  reducers: {};
  middlewares: Array<Middleware<{}, any, Dispatch<AnyAction>>>;
};

export type AppState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
