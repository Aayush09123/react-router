/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import Home from "./components/Home/Home";
import { useRoutes } from "react-router-dom";
import About from "./components/About/About";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ])
  return routes
}

export default App;
