import React, { Component } from 'react';
import styled from 'styled-components';
import { 
    ContentBlock,
    ContentBlockDuo,
    CursiveTitle,
    Emphasis,
    HeroBanner,
    IconCard,
    InfoBar,
    InfoBarLink,
    InfoBarLinkExternal,
    Paragraph
} from '../components/generic';
import { getUserData } from '../util';
import { theme } from '../theme/main';
import Link from 'next/link';
import { FontAlignment } from '../enum';

const StyledMain = styled.main`
    margin: 0;
`;

interface IProps {
    displayName: String;
}

class Index extends Component<IProps> {
    constructor(props) {
        super(props);

        this.getUserControls = this.getUserControls.bind(this);
    }

    static async getInitialProps({ req }) {
        const userData = await getUserData(req);
        const displayName = userData.displayName;

        return { displayName };
    }

    getUserControls(): JSX.Element {
        return this.props.displayName
            ? <InfoBarLink text={`${this.props.displayName}'s Profile`} location="/profile" />
            : <InfoBarLinkExternal href='/login'>Login</InfoBarLinkExternal>
    }

    render() {
        return (
            <>
                <HeroBanner>
                    <InfoBar>
                        <>
                            <span>[LOGO]</span>
                            <InfoBarLink text="How it works" location="/how-it-works" />
                        </>
                        
                        <>
                            {this.getUserControls()}
                        </>
                    </InfoBar>
        
                    <CursiveTitle color={theme.colorGrayLight}>True Task</CursiveTitle>
    
                    <Paragraph alignment={FontAlignment.CENTER}>
                        <Emphasis>What</Emphasis> you want to do, and <Emphasis>why</Emphasis> you want to do it
                    </Paragraph>
                </HeroBanner>
        
                <StyledMain>
                    <ContentBlock>
                        <h2>Here is some copy</h2>
                        <p>Check out that background color alternating. Here is a whole bunch of copy so that I can test out the max width</p>
                    </ContentBlock>
    
                    <ContentBlockDuo>
                        <div>
                            <h2>Motivation</h2>
                            <p>Here is a thing about why you should write down your motivation for each todo...</p>
                        </div>
    
                        <IconCard 
                            icon={['fas', 'lightbulb']}
                            color={theme.colorGreen}
                            size={'2.4em'}
                            message="Write down the reason"
                        />
                    </ContentBlockDuo>
    
                    <ContentBlockDuo>
                        <div>
                            <h2>Simple</h2>
                            <p>Straight to business. Nothing to get in the way like buckets, subtasks, timers, or tags. No more forgetting where you put a certain to do, or guessing which task is the most important.</p>
                        </div>
    
                        <IconCard
                            icon={['fas', 'stream']}
                            color={theme.colorGreen}
                            size={'2.4em'}
                            message="Just a list"
                        />
                    </ContentBlockDuo>
        
                    <ContentBlock>
                        <div>
                            <p>View tasks </p>
                            <Link href="/tasks">
                                <a>here</a>
                            </Link>
                        </div>
                    </ContentBlock>
                </StyledMain>
            </>
        );
    }
}

export default Index;
