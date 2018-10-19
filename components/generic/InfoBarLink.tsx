import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface IProps {
    text: string;
    location: string;
}

const StyledLink = styled.a`
    color: white;
    margin: 0;
    padding-left: 2rem;
    text-decoration: none;
`;

export const InfoBarLink: React.SFC<IProps> = ({ text, location }) => {
    return(
        <Link href={location} passHref>
            <StyledLink>
                {text}
            </StyledLink>
        </Link>
    );
}
