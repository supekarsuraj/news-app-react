import logo from "./logo.svg";
import "./App.css";

import React, { Component , useState , useEffect } from "react";
import Nav from "./Component/Nav";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default function App() {
    const [progress, setProgress] = useState(0);

const apiKey = process.env.REACT_APP_NEWS_API_KEY;


     useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollProgress = (scrollTop / documentHeight) * 100;

    setProgress(scrollProgress);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <>
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(50)}
      />
      {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button> */}
    </div>
       <Router>
        
      <div>
        <Nav />

        <Routes>
          <Route onLoaderFinished={()=>setProgress(50)}
            exact
            path="/"
            element={
              <News key="entertainment" pageSize={5} apiKey={apiKey} category="entertainment" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" pageSize={5} apiKey={apiKey} category="entertainment" />
            }
          />

          <Route
            exact
            path="/general"
            element={<News key="general" pageSize={5} apiKey={apiKey} category="general" />}
          />

          <Route
            exact
            path="/health"
            element={<News key="health" pageSize={5} apiKey={apiKey} category="health" />}
          />

          <Route
            exact
            path="/sports"
            element={<News key="sports" pageSize={5} apiKey={apiKey} category="sports" />}
          />

          <Route
            exact
            path="/technology"
            element={
              <News key="technology" pageSize={5} apiKey={apiKey} category="technology" />
            }
          />

          <Route
            exact
            path="/business"
            element={<News key="business" pageSize={5} apiKey={apiKey} category="business" />}
          />

          <Route
            exact
            path="/science"
            element={<News key="science" pageSize={5} apiKey={apiKey} category="science" />}
          />
        </Routes>
      </div>
    </Router>
    </>
 
  );
}
