import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { theme } from '../../theme/main';

interface IColorProps {
    color: string;
    size: string;
}

interface IProps {
    icon: IconProp | [IconPrefix, IconName];
    color: string;
    size: string;
    spin?: boolean;
}

const IconWrapper = styled.div`
    color: ${(p: IColorProps) => p.color};
    display: flex;
    font-size: ${(p: IColorProps) => p.size};
    justify-content: center;
    padding: ${theme.padding};
`;

export const Icon: React.SFC<IProps> = ({ color, icon, size, spin }) => {
    return (
        <IconWrapper color={color} size={size}>
            <FontAwesomeIcon icon={icon} spin={spin} />
        </IconWrapper>
    );
}
