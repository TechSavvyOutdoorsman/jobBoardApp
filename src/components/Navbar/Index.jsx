import React from 'react'
import { Nav, NavLogoLink, Bars, NavMenu, NavLink, NavBtn, NavBtnLink, NavBtnLinkTwo } from './NavbarElements'

function Navbar() {
    return (
        <>
            <Nav>   
                <NavLogoLink to='/'>
                    <h2>Vaccine Free Careers</h2>
                </NavLogoLink>
                <Bars />
                {/* <NavMenu>
                    <NavLink to="/newjobs" activeStyle>
                        New Jobs 
                        </NavLink>   
                </NavMenu> */}
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                    <NavBtnLinkTwo to='/signup'>Sign Up</NavBtnLinkTwo>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
