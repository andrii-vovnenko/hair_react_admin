import React from "react";
import {Link, withRouter} from "react-router-dom";
import {Nav, NavItem, NavLink} from "react-bootstrap";

const Navigation = ({ location }) => {

  const { pathname } = location;

  return (
    <Nav variant='pills' defaultActiveKey={pathname}>
      <NavItem>
        <NavLink as={Link} eventKey='/' to='/' >home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} eventKey='/createModel' to='/createModel' >{'Создать модель'}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} eventKey='/allModels' to='/allModels' >{'Всі моделі'}</NavLink>
      </NavItem>
    </Nav>
  )
}

export default withRouter(Navigation);
