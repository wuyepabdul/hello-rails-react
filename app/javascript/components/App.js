import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import configureStore from "../configureStore.tsx";
import Greeting from "./Greeting";
// const store = configureStore();

class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting greeting={"Friend"} />} />
            <Route path="/greeting" element={<Greeting greeting={"Friend"} />} />
          </Routes>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;