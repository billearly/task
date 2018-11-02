import styled from 'styled-components';
import { FontAlignment } from '../../enum';
import { theme } from '../../theme/main';

interface IProps {
    color?: string;
    alignment?: FontAlignment;
}

export const Paragraph = styled.p`
    color: ${(p: IProps) => p.color ? p.color : 'white'};
    font-size: 1.2em;
    padding: ${theme.padding};
    text-align: ${(p: IProps) => p.alignment ? p.alignment : FontAlignment.LEFT}
`;
