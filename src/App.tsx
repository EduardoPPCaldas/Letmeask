import React from "react";
import { NewRoom } from "./pages/NewRoom";
import { Route , BrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom}/>

    </BrowserRouter>
  );
}

export default App;
