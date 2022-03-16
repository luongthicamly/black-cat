import React, { useState } from 'react';
import styled from 'styled-components';
import {Primary_Neutral,Primary, Primary_Light, Complement, Disable_Light} from '../Color-scheme'
import IconInfo from '../Asset/SVGs/info.svg';
import IconInfoOutLine from '../Asset/SVGs/info-outline.svg';
import IconPeople from '../Asset/SVGs/people.svg';
import IconPeopleOutLine from '../Asset/SVGs/people-outline.svg';
import IconComment from '../Asset/SVGs/comment.svg';
import IconCommentOutLine from '../Asset/SVGs/comment-outline.svg';

const BoxTabDetail = styled.div`
    border-bottom: 1px solid ${Disable_Light};
    border-top: 1px solid ${Disable_Light};
    display: flex;
`
const ItemTab = styled.div`
    width: calc( 100% / 3);
    display: flex;
    color : #8C8C8C;
    font-size: 12px;
    justify-content: center;
    padding: 10px 0;
    align-items: center;
`
const Icon = styled.img`
    width: 20px;
    padding-right: 5px;
`
const ContentTab = styled.div`
    padding: 10px;
    position: relative;
    text-align: left;
    border-bottom: 1px solid ${Disable_Light};
`
const BoxViewAll = styled.div`
    position: absolute;
    bottom: 5px;
    right: 10px;
    background-image: linear-gradient(#ffffffc2, #fff);
    width: 100%;
    text-align: right;
    padding: 13px 0 0 0;
`
const ViewAll = styled.button`
    background: ${Complement};
    color: ${Primary_Neutral};
    font-size: 10px;
    padding: 10px;
    border-radius: 10px;
    border: none;
`
function TabDetail(props) {
    const [tab,setTab] = useState('detail');
    const handleTab = (t)=>{
        setTab(t);
    }
    return (
        <>
        <BoxTabDetail>
            <ItemTab onClick={()=>handleTab('detail')} className={tab == 'detail' ? 'tab-active' :''}>
                <Icon className={tab == 'detail' ? 'show' :'hide'}  src={IconInfo} alt=""/>
                <Icon className={tab == 'detail' ? 'hide' :'show'} src={IconInfoOutLine} alt=""/>
                Detail
            </ItemTab>
            <ItemTab onClick={()=>handleTab('participants')} className={tab == 'participants' ? 'tab-active' :''}>
                <Icon className={tab == 'participants' ? 'show' :'hide'} src={IconPeople} alt=""/>
                <Icon className={tab == 'participants' ? 'hide' :'show'} src={IconPeopleOutLine} alt=""/>
                Participants
            </ItemTab>
            <ItemTab onClick={()=>handleTab('comment')} className={tab == 'comment' ? 'tab-active' :''}>
                <Icon className={tab == 'comment' ? 'show' :'hide'}  src={IconComment} alt=""/>
                <Icon className={tab == 'comment' ? 'hide' :'show'} src={IconCommentOutLine} alt=""/>
                Comments
            </ItemTab>
        </BoxTabDetail>
        <ContentTab>
            <div className={`content-tab ${tab == 'detail' ? 'active' :''}`}>
                [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius there is south north asim
                <BoxViewAll>
                    <ViewAll>
                        view all
                    </ViewAll>
                </BoxViewAll>
            </div>
            <div className={`content-tab ${tab == 'participants' ? 'active' :''}`}>
                participants
            </div>
            <div className={`content-tab ${tab == 'comment' ? 'active' :''}`}>
                comment
            </div>
        </ContentTab>
        </>
    );
}

export default TabDetail;