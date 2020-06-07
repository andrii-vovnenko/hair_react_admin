import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import CreateModelPage from './components/pages/CreateModelPage/CreateModelPage';

function App() {
 return (
   <>
    <Router>
     <Nav variant='pills' defaultActiveKey='/'>
       <NavItem>
        <NavLink as={Link} eventKey='/' to='/' >home</NavLink>
       </NavItem>
       <NavItem>
        <NavLink as={Link} eventKey='/createModel' to='/createModel' >{'Создать модель'}</NavLink>
       </NavItem>
     </Nav>
     <Switch>
      <Route path='/' exact component={() => <h1>App</h1>} />
      <Route path='/createModel' component={CreateModelPage} />
     </Switch>
    </Router>
   </>
 )
}

export default App;
