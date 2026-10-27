import React, { Component } from "react";

// import React from 'react'

export default function Nav() {
  return (
    <>
    <div>
       
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Navbar
            </a>

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
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="navbarNavAltMarkupLabel">
                  Menu
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Features
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Pricing
                    </a>
                  </li>

                  <li className="nav-item">
                    <span className="nav-link disabled">Disabled</span>
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
  )
}


// export class Nav extends Component {
//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-sm bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               Navbar
//             </a>

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
//                     <a className="nav-link active" href="/">
//                       Home
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Features
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link" href="/">
//                       Pricing
//                     </a>
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
