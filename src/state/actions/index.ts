import {
  SearchRepoAction,
  SearchRepoSuccessAction,
  SearchRepoErrorAction,
} from "./repos";

export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction;
