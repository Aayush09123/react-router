/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import Home from "./components/Home/Home";
import { useRoutes } from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
  ])
  return routes
}

export default App;
