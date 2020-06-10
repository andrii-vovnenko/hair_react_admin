import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateModelPage from './components/pages/CreateModelPage/CreateModelPage';
import AllModelsPage from "./components/pages/AllModelsPage/AllModelsPage";
import Navigation from "./components/Navigation";
import StatusToast from "./components/StatusToast";
import ModelPage from "./components/pages/ModelPage/ModelPage";

function App() {
 return (
   <>
     <Router>
       <Navigation/>
       <Switch>
         <Route path='/' exact component={() => <h1>APP</h1>}/>
         <Route path='/createModel' component={CreateModelPage}/>
         <Route path='/models/:id' component={ModelPage} />
         <Route path='/models' component={AllModelsPage}/>
       </Switch>
       <StatusToast />
     </Router>
   </>
 )
}

export default App;
