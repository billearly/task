import React from 'react';
import { 
    CursiveTitle,
    Emphasis,
    HeroBanner,
    InfoBar,
    InfoBarLink,
    Paragraph
} from '../components/generic';
import { theme } from '../theme/main';
import Link from 'next/link';

const Index: React.SFC = () => {
    return (
        <>
            <HeroBanner>
                <InfoBar>
                    <>
                        <span>[LOGO]</span>
                        <InfoBarLink text="How it works" location="/how-it-works" />
                    </>
                    
                    <>
                        <InfoBarLink text="About" location="/about" />
                        <InfoBarLink text="Login" location="/login" />
                    </>
                </InfoBar>

                <CursiveTitle color={theme.colorGrayLight}>True Task</CursiveTitle>

                <Paragraph>
                    <Emphasis>What</Emphasis> you want to do, and <Emphasis>why</Emphasis> you want to do it
                </Paragraph>
            </HeroBanner>

            <p>View tasks </p>
            <Link href="/tasks">
                <a>here</a>
            </Link>
        </>
    );
}

export default Index;