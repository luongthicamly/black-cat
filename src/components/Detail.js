import React from 'react';
import styled from 'styled-components';
import {Primary_Neutral,Primary, Primary_Light, Primary_Dark, Disable_Light} from '../Color-scheme'
import LogoCat from '../Asset/SVGs/logo-cat.svg';
import TabDetail from './TabDetail';
import When from './When';
import Where from './Where';
import GoingLikes from './GoingLikes';
import Comment from './Comment';
import FooterDetail from './FooterDetail';


const BoxDetail = styled.div`
    text-align: left;
    padding: 10px;
`
const TypeChannel = styled.span`
    color: ${Primary};
    size: 12px; 
    border: 1px solid ${Primary_Light};
    border-radius: 15px;
    padding: 0px 5px;
`;
const Title = styled.h3`
    font-family: SourceSansPro-Semibold;
    font-size: 18px;
    color: ${Primary_Dark};
    text-align: left;
    margin-top: 10px;
`
const BoxAvatar = styled.div`
    display: flex;
    font-family: SourceSansPro-Semibold;
    size: 12px; 
    color: ${Primary_Neutral};
    margin-right: auto;
`;
const Avatar = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #ccc;
    overflow: hidden;
    margin-right: 5px;
`;
const ImgAvatar = styled.img`
    width: 100%;
`;
const BoxContentUser = styled.div`
    display: block;
`
const TimeRelease =styled.p `
    color: ${Disable_Light};
    font-size: 12px;
    margin: 0;
`

function Detail(props) {
    return (
        <>
            <BoxDetail>
                <TypeChannel> Channel name </TypeChannel>
                <Title>Activity Title Name Make it Longer May Longer than One Line</Title>
                <BoxAvatar>
                    <Avatar>
                        <ImgAvatar src={LogoCat} alt=""/>
                    </Avatar>
                    <BoxContentUser>
                        UserName
                        <TimeRelease>Published 2 days ago</TimeRelease>
                    </BoxContentUser>
                </BoxAvatar>
            </BoxDetail>
           <TabDetail/>
           <When/>
           <Where/>
           <GoingLikes/>
           <Comment/>
           <FooterDetail/>
        </>
    );
}

export default Detail;