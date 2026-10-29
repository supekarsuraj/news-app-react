import React, { Component } from "react";
import {
  BrowserRouter as Router,
 
  Route,
  Link
} from "react-router-dom";


// import React from 'react'

export default function Nav() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="navbarNavAltMarkup"
              aria-labelledby="navbarNavAltMarkupLabel"
            >
              

              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>

                 

              
              
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">
                      entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/general">
                       general
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">
                      health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">
                        science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">
                       sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">
                      technology
                    </Link>
                  </li>

              
                </ul>
              </div>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn-outline theme-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

// export class Nav extends Component {
//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-sm bg-light">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//               Navbar
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#navbarNavAltMarkup"
//               aria-controls="navbarNavAltMarkup"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div
//               className="offcanvas offcanvas-end"
//               tabIndex="-1"
//               id="navbarNavAltMarkup"
//               aria-labelledby="navbarNavAltMarkupLabel"
//             >
//               <div className="offcanvas-header">
//                 <h5 className="offcanvas-title" id="navbarNavAltMarkupLabel">
//                   Menu
//                 </h5>

//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="offcanvas"
//                   aria-label="Close"
//                 ></button>
//               </div>

//               <div className="offcanvas-body">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <Link className="nav-link active" to="/">
//                       Home
//                     </Link>
//                   </li>

//                   <li className="nav-item">
                    // <Link className="nav-link" to="/">
//                       Features
//                     </Link>
//                   </li>

//                   <li className="nav-item">
//                     <Link className="nav-link" to="/">
//                       Pricing
//                     </Link>
//                   </li>

//                   <li className="nav-item">
//                     <span className="nav-link disabled">Disabled</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn-outline theme-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

// export default Nav;
