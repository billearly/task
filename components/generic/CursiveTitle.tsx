import styled from 'styled-components';

interface IProps {
    color?: string;
}

export const CursiveTitle = styled.h1`
    color: ${(p: IProps) => p.color ? p.color : 'white'};
    font-family: 'Pacifico', cursive;
    font-size: 2.5em;
    font-weight: normal;
    margin: 0;
    text-align: center;
`;
