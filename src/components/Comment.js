import React from 'react';
import styled from 'styled-components';
import {Primary_Neutral, Primary, Disable_Light} from '../Color-scheme'
import IconReply from '../Asset/SVGs/reply.svg';
import LogoCat from '../Asset/SVGs/logo-cat.svg';
const Box = styled.div`
    margin-top: 10px;
    padding: 10px;
    text-align: left;
`
const Icon = styled.img`
    width: 20px;
`
const BoxAvatar = styled.div`
    display: flex;
    font-family: SourceSansPro-Semibold;
    size: 12px; 
    color: ${Primary_Neutral};
    margin-right: auto;
    align-items: flex-start;
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
const ContentCM =styled.div`
    display: block;
    width: calc(100% - 60px);
`
const UserName = styled.p`
    font-size: 14px;
    color: ${Primary};
    margin: 0;
`
const Time = styled.span`
    font-size: 10px;
    color: ${Disable_Light};
    margin: 0;
`
const Text = styled.p`
    font-size: 14px;
    color: ${Primary_Neutral};
    margin: 0;
`
function Comment(props) {
    const renderComment = () =>{
        let comments=[];
        for(let i=0; i<10; i++){
            comments.push(
                <Box>
                    <BoxAvatar>
                        <Avatar>
                            <ImgAvatar src={LogoCat} alt=""/>
                        </Avatar>
                        <ContentCM>
                            <UserName>UserName <Time>9 hours ago</Time></UserName>
                            <Text>Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</Text>
                        </ContentCM>
                        <Icon src={IconReply} alt=""/>
                    </BoxAvatar>
                </Box>
                );
        }
        return comments;
    }
    return (
        <>
        {renderComment()}
       
        </>
    );
}

export default Comment;