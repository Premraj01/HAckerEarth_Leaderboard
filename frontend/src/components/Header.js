/** @format */

import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {' '}
          <LinkContainer to='/'>
            <Navbar.Brand>App Title</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
