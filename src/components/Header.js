import React, { useState } from 'react';
import styled from 'styled-components';
import IconSearch from '../Asset/SVGs/search.svg';
import {Primary} from '../Color-scheme'
import LogoCat from '../Asset/SVGs/logo-cat.svg';
import IconHome from '../Asset/SVGs/home.svg';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
const BoxHeader = styled.div`
    background: ${Primary};
    display: flex;
    padding: 5px 10px;
`;
const SearchIcon = styled.img`
    width: 25px;
    height: auto;
    float: left;
`;
const BoxDivHeader = styled.div`
    width: calc(100% / 3);
`;
const Logo = styled.img`
    width: 25px;
    height: auto;
`;
const BitMap = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    float: right;
`;
function Header(props) {
    const location = useLocation();
    const pathName = location.pathname;
    const splitPathName = pathName.split("/")[1];
    const OnHandleSearch = () => {
        props.OnHandleSearch();
    }
    return (
        <div className={pathName == '/' ? 'hide-header' : ''}>
        <BoxHeader >
            <BoxDivHeader className={splitPathName == 'detail' ? 'hide-icon' : 'show-icon'}>
                <SearchIcon onClick={()=>OnHandleSearch()} src={IconSearch} alt=""/>
            </BoxDivHeader>
            <BoxDivHeader className={splitPathName == 'detail' ? ' show-icon' : 'hide-icon'}>
                <NavLink to='./list'>
                    <SearchIcon src={IconHome} alt=""/>
                </NavLink>
            </BoxDivHeader>
            <BoxDivHeader>
                <Logo src={LogoCat} alt=""/>
            </BoxDivHeader>
            <BoxDivHeader>
                <BitMap>
                    <Logo src={LogoCat} alt=""/>
                </BitMap>
            </BoxDivHeader>
        </BoxHeader>
        </div>
    );
}

export default Header;