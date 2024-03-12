/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import Home from "./components/Home/Home";
import { useRoutes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ])
  return routes
}

export default App;
