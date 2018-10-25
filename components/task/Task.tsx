import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox } from './';
import { ITask } from '../../model';
import { theme } from '../../theme/main';

interface IProps {
    taskInfo: ITask;
}

interface IState {
    isComplete: boolean;
}

interface IWrapperProps {
    backgroundColor?: string;
    hoverColor?: string;
}

const TaskText = styled.div`
    max-width: 90%;
`;

const TaskTitle = styled.p`
    margin: 0;

    &:after {
        border-bottom: 1px dashed ${theme.colorGrayDark};
        content: '';
        display: block;
        padding-bottom: 0.6rem;
        width: 0.8rem;
    }
`;

const TaskReason = styled.p`
    font-size: 1.2em;
    margin: 0;
    padding-top: 0.8rem;
`;

const TaskBridge = styled.span`
    background-color: ${theme.colorBlueLight};
    border-radius: ${theme.borderRadius};
    margin-left: -0.4rem;
    padding: 0 0.4rem;
`;

const TaskWrapper = styled.div`
    align-items: center;
    background-color: ${(p: IWrapperProps) => p.backgroundColor || 'white'};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${theme.padding};
    max-width: 30rem;
    padding: ${theme.padding};
    transition: background-color ${theme.transitionQuick};
    width: 100%;

    &:first-child {
        margin-top: 0;
    }

    &:hover {
        background-color: ${(p: IWrapperProps) => p.hoverColor || p.backgroundColor || 'white'};
        cursor: pointer;
    }
`;

export class Task extends Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            isComplete: this.props.taskInfo.isComplete
        };

        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.textWithLeadingWhiteSpace = this.textWithLeadingWhiteSpace.bind(this);
    }

    toggleCompletion(): void {
        this.setState({
            isComplete: !this.state.isComplete
        });
    }

    textWithLeadingWhiteSpace(text: string): string {
        if (text.length > 1 && text.charAt(0) !== ' ') {
            return ` ${text}`;
        } else {
            return text;
        }
    }

    render() {
        return (
            <TaskWrapper
                backgroundColor={this.state.isComplete ? theme.colorBlue : theme.colorGrayLight}
                hoverColor={this.state.isComplete ? theme.colorBlue : 'white'}
                onClick={this.toggleCompletion}
            >
                <TaskText>
                    <TaskTitle data-target='task-title'>
                        {this.props.taskInfo.title}
                    </TaskTitle>

                    <TaskReason data-target='task-reason'>
                        <TaskBridge>
                            {this.props.taskInfo.bridge}
                        </TaskBridge>

                        {this.textWithLeadingWhiteSpace(this.props.taskInfo.reason)}
                    </TaskReason>
                </TaskText>

                <Checkbox 
                    isChecked={this.state.isComplete}
                />
            </TaskWrapper>
        );
    }
}
