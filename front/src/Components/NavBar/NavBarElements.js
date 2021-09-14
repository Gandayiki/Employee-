import styled, {css} from 'styled-components/macro';
import {Link } from 'react-router-dom';
//import FaIcons from '../Images/menu.png';
import {HiMenu} from 'react-icons/hi'
import { GiAbstract016 } from "react-icons/gi"


export const Nav = styled.nav `
height :80px;
display:flex;
align-items : center;
justify-content:space-between;
padding :1rem 2rem;
z-index :100;
position:fixed;
width: 100%;
 background: #18298a;

 &:hover{
   color:red;
 }
`

export const NavLink = css `
color:#fff;
display:flex;
align-items:center;
padding : 0 2rem;
height :100%;
cursor: pointer;
font-size: 24px;
font-style:bold;
font-family: Roboto Condensed;
text-decoration:none;
`;
export const Logo = styled(Link) `
${NavLink}
 color :#fff;
 font-style:bold;
 font-size : 42px;
`;
export const Menubars =styled(HiMenu) `
display:none;

@media screen and (max-width:768px){
    display:block;
    background-size:contain;
    height:40px;
    width:40px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform : translate(-50%,25%);

}
`;

export const Navmenu = styled.div `
display:flex;
align-items:center;
margin-right: -48px;

@media screen and (max-width:768px){
    display:none;
}
`;
export const NavMenuLinks =styled(Link) `
${NavLink}
`;

export const NavBtn = styled.div `
display : flex;
align-items :center;
margin-right : 24px;

@media screen and (max-width:768px){
    display:none;
}
`;
export const NavIcon =styled(GiAbstract016) `
 margin-right:0.5rem;
 font-size:2.5rem;
 font-weight:700;

 @media screen and (max-width:960px){
   font-weight:700;
   font-size:2rem;
 }
`;
