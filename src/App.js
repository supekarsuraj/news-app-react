import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Nav from './Component/Nav';
import News from './Component/News';


// import React from 'react'

export default function App() {
  return (
    <div>
      <Nav />
    <News pageSize={5} category="science" />
    </div>
  )
}

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <News />
//       </div>
//     )
//   }
// }

