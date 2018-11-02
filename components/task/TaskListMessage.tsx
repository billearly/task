import React from 'react';
import { Icon, Paragraph } from '../generic';
import { IconProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { theme } from '../../theme/main';
import { FontAlignment } from '../../enum';

interface IProps {
    icon: IconProp | [IconPrefix, IconName];
    iconSpin?: boolean;
}

export const TaskListMessage: React.SFC<IProps> = ({ icon, iconSpin, children }) => {
    return (
        <>
            <Icon
                icon={icon}
                color={theme.colorGrayDark}
                size={'2.4em'}
                spin={iconSpin}
            />

            <Paragraph 
                color={theme.colorGrayDark}
                alignment={FontAlignment.CENTER}
            >
                {children}
            </Paragraph>
        </>
    );
}
