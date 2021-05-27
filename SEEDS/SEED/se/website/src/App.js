import React from 'react';
import Navbar from "./components/Navbar-components/Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home"
import SearchPage from "./components/pages/Search"
import UploadPage from "./components/pages/Upload"
import AdvanceSearchPage from './components/AdvanceSearchPage-components/AdvanceSearchPage';

function App(){
    return(
      <>
      <Router>
        <Navbar />
          <Switch>
            <Route path ='/Home' exact component = {Home}/>
            <Route path="/Search" component={SearchPage} />
            <Route path="/AdvanceSearch" component={AdvanceSearchPage} />
            <Route path="/Upload" component={UploadPage} />
            
            <Redirect to="/Home" />
          </Switch>
      </Router>
      </> 
    );  
}

export default App
