import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/main';

const ContentBlockWrapper = styled.div`
    background-color: ${theme.colorGrayLight};
    margin: 0;
    padding-top: ${theme.padding4x};
    padding-bottom: ${theme.padding4x};

    &:nth-child(even) {
        background-color: ${theme.colorGrayMedium};
    }
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    padding: ${theme.padding};
    text-align: center;

    & > p {
        margin: 0 auto;
        max-width: 50%;
    }
`;

export const ContentBlock: React.SFC = ({ children }) => {
    return (
        <ContentBlockWrapper>
            <Content>
                {children}
            </Content>
        </ContentBlockWrapper>
    );
}
