import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { ITask } from '../../model';
import { Bridge } from '../../enum';
import { Task } from './';
import { theme } from '../../theme/main';

export const tasksQuery = gql`
    query tasks {
        tasks {
            _id
            title
            bridge
            reason
            isComplete
            creationDate
            updateDate
            completionDate
        }
    }
`;

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
    padding: ${theme.padding};
`;

export const TaskList: React.SFC = () => {
    const generateTasks = (tasks: ITask[]): JSX.Element[] => {
        return tasks.map((task, i) => {
            return (
                <Task
                    key={i}
                    taskInfo={task}
                />
            );
        });
    }

    const convertDTOtoTask = (task: any): ITask => {
        task.bridge = Bridge[task.bridge];
        task.creationDate = new Date(Number(task.creationDate));
        task.updateDate = new Date(Number(task.updateDate));
        task.completionDate = task.completionDate
            ? new Date(Number(task.completionDate))
            : null;

        return task;
    }

    return (
        <TaskListWrapper backgroundColor='white'>
            <Query query={tasksQuery}>
                {({ loading, error, data: { tasks } }) => {
                    if (error) {
                        return <div>Error</div>;
                    }

                    if (loading) {
                        return <div>Loading...</div>
                    }

                    return generateTasks(tasks.map(convertDTOtoTask));
                }}
            </Query>
        </TaskListWrapper>
    );
}
