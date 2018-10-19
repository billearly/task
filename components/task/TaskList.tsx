import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../model';
import { Bridge } from '../../enum';
import { Task } from './';
import { theme } from '../../theme/main';

const mockTasks: ITask[] = [
    {
        id: "jer89hjvnv",
        title: 'Get this app going',
        bridge: Bridge.BECAUSE,
        reason: 'it takes one step at a time to make something big',
        isComplete: false,
        creationDate: new Date(),
        updateDate: new Date(),
        completionDate: new Date()
    },
    {
        id: 'oisdn9834ji',
        title: 'Do an initial commit',
        bridge: Bridge.SOTHAT,
        reason: 'I wont lose any work if my desktop dies',
        isComplete: false,
        creationDate: new Date(),
        updateDate: new Date(),
        completionDate: new Date()
    },
    {
        id: '0j309fj0239if',
        title: 'Think of names',
        bridge: Bridge.BECAUSE,
        reason: 'a cool name gets the people going',
        isComplete: false,
        creationDate: new Date(),
        updateDate: new Date(),
        completionDate: new Date()
    },
    {
        id: 'lasjcjh893j4nf',
        title: 'Sign up for True Task',
        bridge: Bridge.SOTHAT,
        reason: 'I can stay motivated and complete my tasks',
        isComplete: false,
        creationDate: new Date(),
        updateDate: new Date(),
        completionDate: new Date()
    }
];

interface IWrapperProps {
    backgroundColor?: string;
}

const TaskListWrapper = styled.div`
    background-color: ${(p: IWrapperProps) => p.backgroundColor || 'white'};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;
    padding: 1rem;
`;

export const TaskList: React.SFC = () => {
    const generateTasks = (tasks: ITask[]): JSX.Element[] => {
        return tasks.map((task, i) =>
            <Task
                key={i}
                taskInfo={task}
            />
        );
    }

    return (
        <TaskListWrapper backgroundColor='white'>
            {generateTasks(mockTasks)}
        </TaskListWrapper>
    );
}
