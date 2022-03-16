import React from 'react';
import styled from 'styled-components'
import {Primary_Dark, Disable_Light, Disable_Dark} from '../Color-scheme'
import IconSearch from '../Asset/SVGs/search.svg';
const TitleSearch = styled.div`
    padding: 10px 0;
`;
const SpanTitle = styled.span`
    color: #AC8EC9;
    text-decoration: underline;
    text-transform: uppercase;
    font-family: SourceSansPro-Semibold;
`;
const BoxSearch = styled.div`
    background: ${Primary_Dark};
    height: 100vh;
    width: 0;
    position: absolute;
    left: 0;
    top: 0;
    transition: all .25s ease-in-out;
    opacity: 0;
    z-index: -1;
`;
const ULBox = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
`;
const LiDate = styled.li`
    color: #fff;
    text-transform: uppercase;
    list-style: none;
    padding: 10px 10px;
    font-family: SourceSansPro-Semibold;
`;
const LiChannel = styled.li`
    border-radius: 20px;
    border: 1px solid #fff;
    list-style: none;
    padding: 5px 12px;
    font-size: 12px;
    color: #fff;
    margin-left: 10px;
    margin-top: 10px
`;
const IMGIcon = styled.img`
    width: 15px;
    padding-right: 2px;
`;
const SearchButton = styled.button`
    background-color: ${Disable_Light};
    color: ${Disable_Dark};
    font-family: SourceSansPro-Semibold;
    text-transform: uppercase;
    border: none;
    z-index: 999;
    position: fixed;
    padding: 15px;
    width: 80%;
    left: 0;
    font-size: 16px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
function Search(props) {
    return (
        <BoxSearch className='box-search'>
            <TitleSearch>
                <SpanTitle>date</SpanTitle>
            </TitleSearch>
            <ULBox>
                <LiDate>anytime</LiDate>
                <LiDate>today</LiDate>
                <LiDate>tomorrow</LiDate>
                <LiDate>this week</LiDate>
                <LiDate>this month</LiDate>
                <LiDate>later</LiDate>
            </ULBox>
            <TitleSearch>
                <SpanTitle>channel</SpanTitle>
            </TitleSearch>
            <ULBox>
                <LiChannel>All</LiChannel>
                <LiChannel>Channel 3</LiChannel>
                <LiChannel>Channel 4</LiChannel>
                <LiChannel>Channel 1</LiChannel>
                <LiChannel>Channel 2</LiChannel>
                <LiChannel>Short</LiChannel>
                <LiChannel>Short</LiChannel>
                <LiChannel>Channel 3</LiChannel>
                <LiChannel>Channel 4</LiChannel>
                <LiChannel>Channel 5</LiChannel>
                <LiChannel>Channel Long Name</LiChannel>
                <LiChannel>Channel 6</LiChannel>
            </ULBox>
            <SearchButton>
                <IMGIcon src={IconSearch} alt=''/>
                search
            </SearchButton>
        </BoxSearch>
    );
}

export default Search;