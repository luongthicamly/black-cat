import React from 'react';
import styled from 'styled-components';
import {Primary_Neutral, Primary_Light} from '../Color-scheme'
import IconCheckOutLine from '../Asset/SVGs/check-outline.svg';
import IconLikeOutLine from '../Asset/SVGs/like-outline.svg';
import LogoCat from '../Asset/SVGs/logo-cat.svg';
const Overflow = styled.div`
    overflow: hidden;
`
const Box = styled.div`
    margin-top: 10px;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid ${Primary_Light};
    display: inline-flex;
    over
`
const Icon = styled.img`
    width: 20px;
`
const Numbers = styled.span`
    color: ${Primary_Neutral};
    font-size: 12px;
    padding-left: 10px;
    min-width: 100px;
`
const Avatar = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ccc;
    overflow: hidden;
    margin-right: 5px;
`;
const ImgAvatar = styled.img`
    width: 100%;
`;
function GoingLikes(props) {
    const renderAvatar = () =>{
        let avatar=[];
        for(let i=0; i<10; i++){
            avatar.push(<Avatar>
                <ImgAvatar src={LogoCat} alt=""/>
            </Avatar>);
        }
        return avatar;
    }
    return (
        <>
        <Overflow>
            <Box>
                <Icon src={IconCheckOutLine} alt=""/>
                <Numbers>34 going</Numbers>
            {renderAvatar()}
            </Box>
        </Overflow>
        <Overflow>
            <Box>
                <Icon src={IconLikeOutLine} alt=""/>
                <Numbers>7 likes</Numbers>
                {renderAvatar()}
            </Box>
        </Overflow>
        </>
    );
}

export default GoingLikes;