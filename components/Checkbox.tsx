import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme/main';

const StyledCheckbox = styled.div`
    cursor: pointer;
    height: 1rem;
    margin: 0;
    width: 1rem;
    border: 2px solid ${theme.colorGrayDark};
    border-radius: 0.15rem;
`;

export const Checkbox: React.SFC = () => {
    return (
        <StyledCheckbox role='checkbox' />
    );
}