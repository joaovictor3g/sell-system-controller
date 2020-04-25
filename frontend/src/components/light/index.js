import React from 'react';

import styled from 'styled-components';

import { FiSun } from 'react-icons/fi';


export default function LightAndDark() {
    const DarkMode = styled.div`
        background: black;
        
    `;

    return (
        <DarkMode>
            <FiSun size={30} color="#000"/>
        </DarkMode>    
    );
};
 