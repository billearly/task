import styled from 'styled-components';
import { theme } from '../../theme/main';

export const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${theme.colorGrayDark};
    margin: ${theme.padding} 0;
    outline: none;
    padding: 0.5rem 0.3rem;

    &:focus {
        border-bottom-color: ${theme.colorBlue};
    }
`;
