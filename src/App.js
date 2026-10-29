import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Nav from "./Component/Nav";
import News from "./Component/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <Nav />
//       <Route exactr>
//         <Switch>
//         <Route exact path="/entertainment">
//           <News pageSize={5} category="entertainment" />{" "}
//         </Route>
//         <Route exact path="/general">
//           <News pageSize={5} category="general" />{" "}
//         </Route>
//          <Route exact path="/health">
//           <News pageSize={5} category="health" />{" "}
//         </Route>
//           <Route exact path="/sports">
//           <News pageSize={5} category="sports" />{" "}
//         </Route>
//          <Route exact path="/technology">
//           <News pageSize={5} category="technology" />{" "}
//         </Route>
//         <Route exact path="/business">
//           <News pageSize={5} category="business" />{" "}
//         </Route>
//         <Route exact path="/science">
//           <News pageSize={5} category="science" />{" "}
//         </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
             <Route exact
            path="/"
            element={<News key="entertainment" pageSize={5} category="entertainment" />}
          />
           <Route exact  
            path="/entertainment"
            element={<News key="entertainment" pageSize={5} category="entertainment" />}
          />

      

          <Route exact  
            path="/general"
            element={<News key="general" pageSize={5} category="general" />}
          />

          <Route exact
            path="/health"
            element={<News key="health" pageSize={5} category="health" />}
          />

          <Route exact
            path="/sports"
            element={<News key="sports"  pageSize={5} category="sports" />}
          />

          <Route exact
            path="/technology"
            element={<News key="technology" pageSize={5} category="technology" />}
          />

          <Route exact
            path="/business"
            element={<News key="business"  pageSize={5} category="business" />}
          />

          <Route exact
            path="/science"
            element={<News key="science" pageSize={5} category="science" />}
          />
        </Routes>
      </div>
    </Router>
  );
}


