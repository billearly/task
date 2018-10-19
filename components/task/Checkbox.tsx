import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/main';

interface IProps {
    isChecked: boolean;
}

const StyledCheckbox = styled.div`
    background-color: ${(p: IProps) => p.isChecked ? theme.colorGrayDark : 'transparent'};
    border: 2px solid ${theme.colorGrayDark};
    border-radius: 0.15rem;
    cursor: pointer;
    height: 1rem;
    margin: 0;
    transition: background-color ${theme.transitionQuick};
    width: 1rem;
`;

export const Checkbox: React.SFC<IProps> = ({ isChecked }) => {
    return (
        <StyledCheckbox 
            role='checkbox'
            isChecked={isChecked}
        />
    );
}