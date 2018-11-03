import styled from 'styled-components';
import { theme } from '../../theme/main';

export const Button = styled.button`
    background-color: ${theme.colorGrayDark};
    border: none;
    border-radius: ${theme.borderRadiusLarge};
    color: ${theme.colorGrayLight};
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    margin: ${theme.padding} auto;
    outline: none;
    padding: ${theme.padding} ${theme.padding2x};
    text-transform: uppercase;

    &:focus, &:hover {
        background-color: ${theme.colorBlue};
    }
`;
