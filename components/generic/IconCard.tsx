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
    border-bottom: 1px solid ${theme.colorGrayMedium};
    color: ${(p: IColorProps) => p.color};
    display: flex;
    font-size: 2.4em;
    justify-content: center;
    padding-bottom: ${theme.padding2x};
    padding-top: ${theme.padding};
`;

const IconCardMessage = styled.p`
    padding-top: ${theme.padding};
    text-align: center;
`;

const StyledIconCard = styled.div`
    background-color: white;
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadowNoColor} ${(p: IColorProps) => p.color};
    padding: ${theme.padding};
    width: 10rem;
`;

export const IconCard: React.SFC<IProps> = ({ icon, color, message }) => {
    return (
        <StyledIconCard color={color}>
            <IconWrapper color={color}>
                <FontAwesomeIcon icon={icon} />
            </IconWrapper>
            
            <IconCardMessage>
                {message}
            </IconCardMessage>
        </StyledIconCard>
    );
}
