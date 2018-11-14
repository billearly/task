import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { ITask } from '../../model';
import { Task, TaskListMessage } from './';
import { GET_TODOS, convertDTOToTask } from '../../gql';
import { theme } from '../../theme/main';

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

    return (
        <TaskListWrapper backgroundColor='white'>
            <Query query={GET_TODOS}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return (
                            <TaskListMessage icon={['fas', 'circle-notch']} iconSpin={true}>
                                Getting your tasks
                            </TaskListMessage>
                        );
                    }

                    if (error) {
                        return (
                            <TaskListMessage icon={['fas', 'search']}>
                                Uh oh, there was a problem getting your tasks. Try again later
                            </TaskListMessage>
                        );
                    }

                    if (data.tasks.length < 1) {
                        return (
                            <TaskListMessage icon={['fas', 'pencil-alt']}>
                                It looks like you don't have any tasks. Add one now
                            </TaskListMessage>
                        );
                    }

                    return generateTasks(data.tasks.map(convertDTOToTask));
                }}
            </Query>
        </TaskListWrapper>
    );
}
