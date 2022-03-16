import React from 'react';
import styled from 'styled-components';
import {Complement,Primary, Primary_Light} from '../Color-scheme'
import DateFrom from '../Asset/SVGs/date-from.svg';
import DateTo from '../Asset/SVGs/date-to.svg'; 

const BoxWhen = styled.div`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid ${Primary_Light};
`
const BoxFlex = styled.div`
    display: flex;
    justify-content: center;
`
const TitleWhen = styled.div`
    color: ${Primary};
    position: relative;
    padding-left: 11px;

    &::after {
        content: '';
        width: 4px;
        height: 100%;
        background: #8560A9;
        position: absolute;
        left: 0;
        top: 0;
    }
`

const BoxTime = styled.div`
    width: 50%;
    text-align: center;
    margin-top: 10px;
`
const Icon = styled.img`
    width: 20px
`
const Times = styled.span`
    color: ${Complement};
    font-size: 32px;
`
const TimeSmall = styled.span`
    color: ${Complement};
    font-size: 10px
`
function When(props) {
    const styleBorder = {
        "border-right": "1px solid #E8E8E8"
    }
    return (
        <BoxWhen>
            <TitleWhen>When</TitleWhen>
            <BoxFlex>
                <BoxTime style={styleBorder}>
                    <BoxFlex>
                        <Icon src={DateFrom} alt=''/>
                        15 April 2015
                    </BoxFlex>
                    <Times>8:30</Times>
                    <TimeSmall>am</TimeSmall>
                </BoxTime>
                <BoxTime>
                    <BoxFlex>
                        <Icon src={DateTo} alt=''/>
                        15 April 2015
                    </BoxFlex>
                </BoxTime>
            </BoxFlex>
        </BoxWhen>
    );
}

export default When;