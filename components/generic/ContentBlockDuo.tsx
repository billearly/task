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

const ContentSide = styled.div`
    width: 50%;

    & > div {
        margin: 0 auto;
    }
`;

export const Content = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    padding: ${theme.padding};
`;

export const ContentBlockDuo: React.SFC = ({ children }) => {
    return (
        <ContentBlockWrapper>
            <Content>
                <ContentSide>
                    {children[0]}
                </ContentSide>

                <ContentSide>
                    {children[1]}
                </ContentSide>
            </Content>
        </ContentBlockWrapper>
    );
}
