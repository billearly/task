import React from 'react';
import styled from 'styled-components';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { Icon } from './';
import { theme } from '../../theme/main';

interface IProps {
    icon: IconProp | [IconPrefix, IconName];
    color: string;
    message: string;
    size: string;
}

const IconCardMessage = styled.p`
    text-align: center;
    padding: ${theme.padding} 0;
`;

const StyledIconCard = styled.div`
    background-color: white;
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 13rem;
    padding: ${theme.padding};
    width: 10rem;
`;

export const IconCard: React.SFC<IProps> = ({ icon, color, message, size }) => {
    return (
        <StyledIconCard>
            <Icon 
                icon={icon}
                color={color}
                size={size}
            />
            
            <IconCardMessage>
                {message}
            </IconCardMessage>
        </StyledIconCard>
    );
}
