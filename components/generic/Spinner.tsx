import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme/main';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
    align-items: center;
    background-color: ${theme.colorWhiteTransparent};
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
`;

const StyledSpinner = styled.div`
    animation: ${rotate} ${theme.animationSpeed} linear infinite;
    border: 0.5rem solid ${theme.colorGrayDark};
    border-top-color: ${theme.colorGrayMedium};
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
`;

export const Spinner: React.SFC = () => {
    return (
        <SpinnerWrapper>
            <StyledSpinner />
        </SpinnerWrapper>
    );
}
