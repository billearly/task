import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/main';

const InfoBarContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
`;

const InfoBarSection = styled.div`
    margin: 0;
`;

const StyledInfoBar = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    padding: ${theme.padding};
`;

export const InfoBar: React.SFC = ({ children }) => {
    return (
        <InfoBarContainer>
            <StyledInfoBar>
                <InfoBarSection>{children[0]}</InfoBarSection>
                <InfoBarSection>{children[1]}</InfoBarSection>
            </StyledInfoBar>
        </InfoBarContainer>
    );
}
