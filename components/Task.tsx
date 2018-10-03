import React from 'react';
import styled from 'styled-components';
import { Checkbox } from './';
import { ITask } from '../model';
import { theme } from '../theme/main';

interface IProps {
    task: ITask;
}

interface IWrapperProps {
    backgroundColor?: string;
    hoverColor?: string;
}

const TaskTitle = styled.p`
    margin: 0;
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
    max-width: 30rem;
    padding: 1rem;
    width: 100%;

    &:hover {
        background-color: ${(p: IWrapperProps) => p.hoverColor || p.backgroundColor || 'white'};
        cursor: pointer;
    }

    transition: background-color ${theme.transitionQuick};
`;

export const Task: React.SFC<IProps> = ({ task }) => {
    return (
        <TaskWrapper
            backgroundColor={theme.colorGrayLight}
            hoverColor={theme.colorBlueLight}
        >
            <TaskTitle>{task.title}</TaskTitle>

            <Checkbox />
        </TaskWrapper>
    );
}
