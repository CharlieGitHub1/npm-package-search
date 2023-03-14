import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk)); // this line describes the store and the reducers that are used in the store and the middleware that is used in the store (thunk)   // the store is created with the createStore function and the reducers are passed in as the first argument and the second argument is an empty object and the third argument is the middleware that is used in the store (thunk)
