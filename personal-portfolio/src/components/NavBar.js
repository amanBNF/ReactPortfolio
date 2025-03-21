import React from 'react';
import { useState, useEffect} from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Skills</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={''} alt=""/></a>
                            <a href='#'><img src={''} alt=""/></a>
                            <a href='#'><img src={''} alt=""/></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
