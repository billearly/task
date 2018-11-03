import styled from 'styled-components';
import { theme } from '../../theme/main';
import { FontAlignment } from '../../enum';

interface IProps {
    alignment?: FontAlignment
}

export const ErrorMessage = styled.p`
    color: red;
    font-style: italic;
    padding: ${theme.padding} 0;
    text-align: ${(p: IProps) => p.alignment || FontAlignment.LEFT}
`;
