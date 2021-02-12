import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import Sidebarfunction from './SideBarData';
import './Sidebar.css';
// import {Button} from "react-bootstrap";
const Nav = styled.header`
background-color: #2073d9;
min-height: 8vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-size: calc(10px + 1vmin);
color: white;
padding: 0 6%;`;


const Nav2 = styled.div`
  background-color: rgb(32, 115, 217);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

// const Nav = styled.div`
//   background: #2073d9 !important;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #7aadeb !important;
  width: 15%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  border:2px solid;
  overflow-y: auto;
  
`;
const SearchBar = styled(({ className, onSearchClick }) => (
  <div className={className}>
    <SearchInput />
    <SearchBtn on onClick={onSearchClick}>Search</SearchBtn>
  </div>
))`
display: flex;
flex-direction: row;
width: 50%;
`;
const SearchInput = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: 'Search for Videos',
  size: props.size || '0.2em',
}))`
color: grey;
font-size: 1em;
border: 2px solid silver;
border-radius: 4px;
width: 100%;
margin: ${(props) => props.size};
padding: ${(props) => props.size};
`;
const SearchBtn = styled.button`
display: inline-block;
color: #2073d9;
font-size: 1em;
padding: 0.25em 1em;
border: 1px solid silver;
border-radius: 3px;
display: block;
background-color:#fff;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
const StyledLink = styled.button`
display: inline-block;
color: white;
font-weight: bold;
font-size: 1em;
background: transparent;
border: 0px;
`;


const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    console.log(props.applicationState.user.type)
  })

  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <StyledLink as="a" href="/#">
            <FaIcons.FaBars onClick={showSidebar} />
          </StyledLink>
          <SearchBar onSearchClick={() => alert('Search the content')} />
          <StyledLink as="a" href="/login" onClick={() =>('login')}>Login</StyledLink>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>

            

            {/* //callfunction   */}
            {Sidebarfunction(props.applicationState.user.type).map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}


const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
