import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../database/db';
import ItemList from './ItemList';
const BoxList = styled.div`
    padding: 10px;
`
function List(props) {
    const posts = data;
    const renderPost = () => {
        return posts.map((post, key) => <ItemList key={key} post={post}/>)
    }
    return (
        <div>
            <BoxList>
                {renderPost()}
            </BoxList>
            
        </div>
    );
}

export default List;