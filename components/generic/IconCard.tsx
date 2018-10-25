import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { theme } from '../../theme/main';

// have the shadow be a lighter version of the main color

interface IProps {
    icon: IconProp | [IconPrefix, IconName];
    color: string;
    message: string;
}

interface IColorProps {
    color: string;
}

const IconWrapper = styled.div`
    color: ${(p: IColorProps) => p.color};
    display: flex;
    font-size: 2.4em;
    justify-content: center;
    padding-top: ${theme.padding};
`;

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

export const IconCard: React.SFC<IProps> = ({ icon, color, message }) => {
    return (
        <StyledIconCard>
            <IconWrapper color={color}>
                <FontAwesomeIcon icon={icon} />
            </IconWrapper>
            
            <IconCardMessage>
                {message}
            </IconCardMessage>
        </StyledIconCard>
    );
}
