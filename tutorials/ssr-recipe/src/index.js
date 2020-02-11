import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import rootReducer, { rootSaga } from "./modules"
import createSagaMiddleware from "redux-saga"
import { loadableReady } from "@loadable/component"

//Creates a Redux middleware and connects the Sagas to the Redux Store
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, window.__PRELOADED_STATE__, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootSaga)

const Root = () => {
  return (
    // ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    // document.getElementById("root")
  )
}

const root = document.getElementById("root")

// 프로덕션 환경 에서는 loadableReady 와 hydrate 를 사용하고
// 개발 환경에서는 기존 하던 방식으로 처리
if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root)
  })
} else {
  ReactDOM.render(<Root />, root)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
