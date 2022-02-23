import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import greetingReducer from "./store/greeting/greeting";

const reducers = combineReducers({
  greeting: greetingReducer,
});

const middleWares = [thunk];

const initialState = null

// function rootReducer(state, action) {
//   console.log(action.type);
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

export default function configureStore() {
  const store = createStore(
    reducers,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleWares))
  );
  return store;
}

// const configureStore = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(...middleWares)),
// );

// export default configureStore;
