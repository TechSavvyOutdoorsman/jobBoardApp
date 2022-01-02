import React from 'react'
import { Nav, NavLogoLink, Bars, NavBtn } from './NavbarElements'
import { NavLink as Link } from 'react-router-dom'
import { HiLogin } from 'react-icons/hi'



function Navbar({ isAuth }) {
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
                    {!isAuth ? <Link className='btn btn-primary' to='/login'><HiLogin /> Log in</Link>
                    : <Button className="btn btn-outline-primary">Log Out</Button>
                    }
                    {/* <NavBtnLink to='/login'>Login</NavBtnLink>  */}
                    {/* <NavBtnLinkTwo to='/signup'>Sign Up</NavBtnLinkTwo>         */}
                    {/* <NavBtnLinkThree >Log Out</NavBtnLinkThree>  */}
        
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
