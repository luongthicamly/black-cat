import React from 'react';
import styled from 'styled-components';
import {Primary_Neutral,Primary, Primary_Light, Primary_Dark} from '../Color-scheme'
import IconTime from '../Asset/SVGs/time.svg';
import LogoCat from '../Asset/SVGs/logo-cat.svg';
import IconCheck from '../Asset/SVGs/check.svg';
import IconCheckOutLine from '../Asset/SVGs/check-outline.svg';
import IconLike from '../Asset/SVGs/like.svg';
import IconLikeOutLine from '../Asset/SVGs/like-outline.svg';
import { NavLink } from 'react-router-dom';
const BoxItem = styled.div`
    border-bottom: 1px solid #E8E8E8;
    padding: 10px 0;
`;
const FlexDiv = styled.div`
    display: flex
`
const BoxAvatar = styled.div`
    display: flex;
    font-family: SourceSansPro-Semibold;
    size: 12px; 
    color: ${Primary_Neutral};
    margin-right: auto;
`;
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
const TypeChannel = styled.span`
    color: ${Primary};
    size: 12px; 
    border: 1px solid ${Primary_Light};
    border-radius: 15px;
    padding: 0px 5px;
`;
const BoxContentItem = styled.div``;
const TitleItem = styled.h3`
    font-family: SourceSansPro-Semibold;
    font-size: 18px;
    color: ${Primary_Dark};
    text-align: left;
    margin-top: 10px;
`
const TimeIcon = styled.img`
    width: 15px;
`
const TimeSpan = styled.span`
    font-size: 12px;
    color: ${Primary};
`
const ContentItem = styled.p`
    color: ${Primary_Neutral};
    font-size: 14px;
    text-align: left;
`
const IconFT = styled.img`
    width: 15px;
    margin-right: 5px
`
const BoxPic = styled.div`
    display: flex;
    padding-right: 30px;
`
const ContentPic = styled.span`
    font-family: SourceSansPro-Regular;
    font-size: 12px;
`
const ContentPicFalse = styled.span`
    font-family: SourceSansPro-Regular;
    font-size: 12px;
    color: ${Primary};
`
function ItemList(props) {
    const {post} = props;
    return (
        <BoxItem>
            <FlexDiv>
                <BoxAvatar>
                    <Avatar>
                        <ImgAvatar src={LogoCat} alt=""/>
                    </Avatar>
                    UserName
                </BoxAvatar>
                <TypeChannel>{post.type}</TypeChannel>
            </FlexDiv>
            <BoxContentItem>
                <NavLink to={`/detail/${post.id}`}>
                    <TitleItem>{post.title}</TitleItem>
                </NavLink>
                <FlexDiv>
                    <TimeIcon src={IconTime} alt=""/>
                    <TimeSpan>{post.timeStart} - {post.timeEnd}</TimeSpan>
                </FlexDiv>
                <ContentItem>{post.content}</ContentItem>
            </BoxContentItem>
            <FlexDiv>
                <BoxPic>
                    {post.going == true?<IconFT src={IconCheck} alt=""/> : <IconFT src={IconCheckOutLine} alt=""/>}
                    {post.going == true?<ContentPic>I am going</ContentPic> : <ContentPicFalse>6 going</ContentPicFalse>}
                </BoxPic>
                <BoxPic>
                    {post.like == true?<IconFT src={IconLike} alt=""/> : <IconFT src={IconLikeOutLine} alt=""/>}
                    {post.like == true?<ContentPic>I like it</ContentPic> : <ContentPicFalse>10 likes</ContentPicFalse>}
                </BoxPic>
            </FlexDiv>
        </BoxItem>
    );
}

export default ItemList;