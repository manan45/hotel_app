import React from 'react';
import Home from './pages/Home';
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import './App.css';
import SingleRoom from "./pages/SingleRoomPage";
// route imports
import {Route, Switch} from 'react-router-dom';

// import the navigation bar component
import Navbar from "./components/Navbar";

function App() {
  return (
      // define the routes of app
      // use exact to link the component only to the url
      // use SWITCH if any unwanted route is entered by the user
      // "/route_name/:variable_name  for passing parameters to  the url"
      //as navigation bar is required in all the pages it is kept outside the switch tag
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path= "/rooms/:room_name"  component={SingleRoom} />
          <Route component={Error}/>
        </Switch>
      </>
  );
};

export default App;
