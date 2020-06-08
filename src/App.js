import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateModelPage from './components/pages/CreateModelPage/CreateModelPage';
import AllModelsPage from "./components/pages/AllModelsPage/AllModelsPage";
import Navigation from "./components/Navigation";

function App() {
 return (
   <>
     <Router>
       <Navigation/>
       <Switch>
         <Route path='/' exact component={() => <h1>App</h1>}/>
         <Route path='/createModel' component={CreateModelPage}/>
         <Route path='/allModels' component={AllModelsPage}/>
       </Switch>
     </Router>
   </>
 )
}

export default App;
