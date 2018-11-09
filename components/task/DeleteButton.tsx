import React from 'react';
import styled from 'styled-components';
import { Icon } from '../generic/Icon';
import { theme } from '../../theme/main';

interface IProps {
    handleClick: (e: object, ...any) => void;
}

const StyledDeleteButton = styled.button`
    background-color: ${theme.colorGrayMedium};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 3rem;
    padding: 0;
    width: 3rem;
    transition: background-color ${theme.transitionQuick};

    &:hover {
        background-color: ${theme.colorBlueLight};
    }
`;

export const DeleteButton: React.SFC<IProps> = ({ handleClick }) => {
    return (
        <StyledDeleteButton onClick={handleClick}>
            <Icon
                icon={['far', 'trash-alt']}
                color={theme.colorGrayDark}
                size='1.2em'
            />
        </StyledDeleteButton>
    )
}
