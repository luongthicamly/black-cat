import React from 'react';
import styled from 'styled-components';
import {Primary_Neutral, Primary, Primary_Light} from '../Color-scheme'
import Gmap from '../Asset/Imgs/gmap.png';

const BoxWhen = styled.div`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid ${Primary_Light};
`
const Title = styled.div`
    color: ${Primary};
    position: relative;
    padding-left: 11px;
    margin-bottom: 10px;
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
const Name = styled.p`
    color: ${Primary_Neutral};
    font-size: 14px;
    margin: 0;
`
const Map = styled.img`
    width: 100%;
    height: auto;
    margin-top: 10px;
    border-radius: 10px;
`
function Where(props) {
    const styleBold = {
        "font-weight": "bold"
    }
    return (
        <BoxWhen>
            <Title>Where</Title>
            <Name style={styleBold}>Marina Bay Sands</Name>
            <Name>10 Bayfront Ave, S018956</Name>
            <Map src={Gmap} alt="" />
        </BoxWhen>
    );
}

export default Where;