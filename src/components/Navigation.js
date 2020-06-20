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
        <NavLink as={Link} eventKey='/createModel' to='/createModel' >{'Створити модель'}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} eventKey='/models' to='/models' >{'Всі моделі'}</NavLink>
      </NavItem>
    </Nav>
  )
}

export default withRouter(Navigation);
