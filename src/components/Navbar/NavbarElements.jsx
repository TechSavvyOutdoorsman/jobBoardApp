import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


export const Nav = styled.nav`
    background: black;
    color: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 10;
    width: 100%;
    }
`

export const NavLogoLink = styled(Link)`
    color: white;
    display: flex;
    align-items: left;
    justify-content: center;
    text-decoration: none;
    flex-direction: column;
    margin-left: 1.5rem;
    margin-top: .5rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    z-index: 11;
    &:hover {
        transition: all 0.2s ease-in-out;
        opacity: 0.6;
    }
    @media(min-width: 768px) { 
        flex-direction: row;
        margin-top: 1.65rem;
        gap: .5rem;
    }
`


export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    z-index: 11;
    font-weight: 400;
    font-family: 'Comfortaa', sans-serif;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: turquoise;
    }
`


export const Bars = styled(FaBars)`
    color: white;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        margin-top: .2rem;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;

    }
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px) { 
        display: none;
    }
`


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`


export const NavBtnLink = styled(Link)`
    border-radius: 3px;
    background: blue;
    padding: 12px 22px;
    color: #000;
    border: none;
    ouline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`
export const NavBtnLinkTwo = styled(Link)`
border-radius: 3px;
background: turquoise;
padding: 12px 22px;
margin-left: 1rem;
color: #000;
border: none;
ouline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: 700;
font-family: 'Comfortaa', sans-serif;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
}
`
export const NavBtnLinkThree = styled(Link)`
    border-radius: 3px;
    background: blue;
    padding: 12px 22px;
    color: #000;
    border: none;
    ouline: none;
    cursor: pointer;
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-family: 'Comfortaa', sans-serif;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`