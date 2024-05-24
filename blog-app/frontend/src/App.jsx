import React from "react";


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "./dummy-data.json";
import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";


// function App() {
//   const user = {
//     firstName: "Byron",
//     lasttName: "de Villiers",
//     bio: "bio",
//     email: "byron@gmail.com",
//     authenticated: true
//   };

//   if(user.authenticated)
//   {
//     return (<div >
//       <h1> Welcome to our new app</h1>
//       <h5> (user.firstName)</h5>
  
//      </div>
//     ) ;
//   }
//   else
//   {
//     return (<div >
//     <h1> Please Login</h1>
//    </div>);
//   }
  
  
// }

// export default App;

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;