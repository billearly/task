import React from 'react';
import styled from 'styled-components';
import { ITask } from '../model';
import { Task } from './';
import { theme } from '../theme/main';

const mockTasks: ITask[] = [
    {
        id: "jer89hjvnv",
        title: 'Get this app going',
        isComplete: false,
        creationDate: new Date(),
        updateDate: new Date(),
        completionDate: new Date()
    },
    {
        id: 'oisdn9834ji',
        title: 'Do an initial commit',
        isComplete: false,
        creationDate: new Date(),
        updateDate: new Date(),
        completionDate: new Date()
    },
    {
        id: '0j309fj0239if',
        title: 'Think of names',
        isComplete: true,
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
                task={task}
            />
        );
    }

    return (
        <TaskListWrapper backgroundColor='white'>
            {generateTasks(mockTasks)}
        </TaskListWrapper>
    );
}
