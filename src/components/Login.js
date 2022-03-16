import React from 'react';
import styled from 'styled-components'
import BG_login from '../Asset/Imgs/Street-Dance-01.jpg';
import {Primary, Complement, Primary_Light} from '../Color-scheme';
import LogoCat from '../Asset/SVGs/logo-cat.svg';
import User from '../Asset/SVGs/user.svg';
import Password from '../Asset/SVGs/password.svg';
import { NavLink } from 'react-router-dom';
const WrapperLogin = styled.div`
    background: url('${BG_login}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    &:after {
        content: "";
        position: absolute;
        background: ${Primary};
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
      }
`;
const BoxLogin = styled.div`
    z-index: 99;
    position: relative;
    width: 75%;
    margin: 0 auto;
`;
const Slogan = styled.p`
    color: ${Complement};
    font-family: SourceSansPro-Semibold;
    text-transform: uppercase;
    margin: 0;
    padding-top:69px
`;
const Title = styled.h1`
    font-family: SourceSansPro-Bold;
    font-size: 24px;
    color: ${Complement};
    text-transform: uppercase;
    padding-top: 16px;
    margin: 0;
`;
const BoxLogo = styled.div`
    border: 1px solid #D5EF7F;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    padding: 10px;
    margin: 37px auto 0 auto;

`;
const Logo = styled.img`
    width: 40px;
    height: 40px;
`;
const Form = styled.div`
    margin-top: 118px;
`;
const InputUser = styled.input`
    position: relative;
    background: url('${User}');
    background-repeat: no-repeat;
    -khtml-background-size: 15px 15px;
    -ms-background-size: 15px 15px;
    background-size: 15px 15px;
    background-position: left 15px top 12px;
    border: 1px solid #dee2e6;
    padding: 11px 15px 11px 40px;
    border-radius: 50px;
    &::placeholder{
        color: #dee2e6
    }
    &:focus-visible{
        background: ${Primary_Light} url('${User}');
        background-repeat: no-repeat;
        -khtml-background-size: 15px 15px;
        -ms-background-size: 15px 15px;
        background-size: 15px 15px;
        background-position: left 15px top 12px;
        opacity: 0.5;
    }
`;
const InputPassword = styled.input`
    position: relative;
    background: url('${Password}');
    background-repeat: no-repeat;
    -khtml-background-size: 15px 15px;
    -ms-background-size: 15px 15px;
    background-size: 15px 15px;
    background-position: left 15px top 12px;
    border: 1px solid #dee2e6;
    padding: 11px 15px 11px 40px;
    border-radius: 50px;
    margin-top: 16px;
    &::placeholder{
        color: #dee2e6
    }
    &:focus-visible{
        background: ${Primary_Light} url('${Password}');
        background-repeat: no-repeat;
        -khtml-background-size: 15px 15px;
        -ms-background-size: 15px 15px;
        background-size: 15px 15px;
        background-position: left 15px top 12px;
        opacity: 0.5;
    }
`;
const SignIn = styled.div`
    background-color: ${Complement};
    font-family: SourceSansPro-Semibold;
    text-transform: uppercase;
    border: none;
    z-index: 999;
    position: fixed;
    padding: 15px;
    width: 100%;
    left: 0;
    font-size: 16px;
    bottom: 0;
`;

function Login(props) {
    const style = {
        "color": "#000",
        "textDecoration": "none"
    }
    return (
        <WrapperLogin>
            <BoxLogin>
                <Slogan>find the most loved activities</Slogan>
                <Title>black cat</Title>
                <BoxLogo>
                    <Logo src={LogoCat} alt=""/>
                </BoxLogo>
                <Form>
                    <InputUser placeholder='User'/>
                    <InputPassword placeholder='Password'/>
                </Form>
            </BoxLogin>
            <SignIn>
                <NavLink style={style} to="./list">sign in</NavLink>
            </SignIn>
        </WrapperLogin>
    );
}

export default Login;