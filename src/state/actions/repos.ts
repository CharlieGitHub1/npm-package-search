import { ActionType } from "../action_types";

export interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

export interface SearchRepoSuccessAction {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

export interface SearchRepoErrorAction {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}
