import React from 'react';
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='bg-dark container-fluid'>
            <Navbar className='d-flex container' >
                <div>
                    <NavbarBrand className='text-light' to="/">Quizact</NavbarBrand>
                </div>
                <div>
                    <NavbarToggler className='d-sm-block d-md-none d-lg-none bg-light' onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto d-flex flex-md-row flex-lg-row flex-sm-column" navbar>
                            <NavItem className='p-2'>
                                <Link className='text-light navlink' to="/">Home</Link>
                            </NavItem>
                            <NavItem className='p-2'>
                                <Link className='text-light navlink' to='/statatics'>
                                    Statatics
                                </Link>
                            </NavItem>
                            <NavItem className='p-2'>
                                <Link className='text-light navlink' to='/blog'>
                                    Blog
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;