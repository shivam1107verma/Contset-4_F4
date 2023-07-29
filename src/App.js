import React from "react";
import "../src/App.css";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import store from "./reduxStore/store";
import { Provider } from "react-redux";

const App = () => {
 return(
  <Provider store={store}>
  <div>
    
    <Routes>
      <Route path="" element={<Signin/>}  />
       <Route path="/profile" element={<Profile/>}  /> 
      
    </Routes>
    
  </div>
  </Provider>
 )
};

export default App;