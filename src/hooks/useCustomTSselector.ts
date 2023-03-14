import { useSelector, TypedUseSelectorHook } from "react-redux";
import { CoreStateFoundation } from "../state";

export const useCustomTSselector: TypedUseSelectorHook<CoreStateFoundation> =
  useSelector;
