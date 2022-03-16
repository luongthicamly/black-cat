import React from 'react';
import styled from 'styled-components';
import {Primary, Complement} from '../Color-scheme'
import CommentSingle from '../Asset/SVGs/comment-single.svg';
import LikeOutline from '../Asset/SVGs/like-outline.svg';
import CheckOutline from '../Asset/SVGs/check-outline.svg';

const Box = styled.div`
    margin-top: 10px;
    background: ${Primary};
    display: flex;
`
const BoxLeft = styled.div`
    padding: 10px;
    display: flex;
    width: 60%;
`
const BoxRight = styled.div`
    padding: 10px;
    background: ${Complement};
    display: flex;
    width: 40%;
    justify-content: center;
`

const Icon = styled.img`
    width: 20px;
`
function FooterDetail(props) {
    const styleWidth = {
        "width": "50%",
        "text-align": "center"
    }
    return (
        <Box>
            <BoxLeft>
                <div style={styleWidth}>
                    <Icon src={CommentSingle} alt=""/>
                </div>
                <div style={styleWidth}>
                    <Icon src={LikeOutline} alt=""/>
                </div>
            </BoxLeft>
            <BoxRight>
                <Icon src={CheckOutline} alt=""/>
                <span>Join</span>
            </BoxRight>
        </Box>
    );
}

export default FooterDetail;