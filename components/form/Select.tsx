import styled from 'styled-components';
import { theme } from '../../theme/main';

export const Select = styled.select`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${theme.colorGrayDark};
    cursor: pointer;
    margin: ${theme.padding} 0;
    outline: none;
    padding: 0.5rem 0;

    &:focus {
        border-bottom-color: ${theme.colorBlue};
    }
`;
