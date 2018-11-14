import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation, MutationFn } from 'react-apollo';
import { DELETE_TODO, GET_TODOS } from '../../gql';
import { DeleteButton } from './';
import { Spinner } from '../generic';
import { ITask } from '../../model';
import { theme } from '../../theme/main';
import Snackbar from '@material-ui/core/Snackbar';

interface IProps {
    taskInfo: ITask;
}

interface IState {
    isErrorShown: boolean
}

interface IWrapperProps {
    backgroundColor?: string;
    hoverColor?: string;
}

const TaskText = styled.div`
    width: 90%;
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
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${theme.padding};
    max-width: 30rem;
    padding: ${theme.padding};
    position: relative;
    transition: background-color ${theme.transitionQuick};
    width: 100%;

    &:first-child {
        margin-top: 0;
    }

    &:hover {
        background-color: ${(p: IWrapperProps) => p.hoverColor || p.backgroundColor || 'white'};
    }
`;

export class Task extends Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            isErrorShown: false
        };

        this.toggleCompletion = this.toggleCompletion.bind(this);
        this.textWithLeadingWhiteSpace = this.textWithLeadingWhiteSpace.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
        this.toggleErrorState = this.toggleErrorState.bind(this);
    }

    toggleCompletion(): void {
        console.log('not implemented');
    }

    textWithLeadingWhiteSpace(text: string): string {
        if (text.length > 1 && text.charAt(0) !== ' ') {
            return ` ${text}`;
        } else {
            return text;
        }
    }

    handleDeletion(e, mutationFn: MutationFn): void {
        e.preventDefault();

        mutationFn({
            variables: {
                _id: this.props.taskInfo._id
            }
        }).catch((e) => {
            console.log(e);
        })
    }

    toggleErrorState(newState: boolean): void {
        this.setState({
            isErrorShown: newState
        });
    }

    render(): JSX.Element {
        return (
            <Mutation
                mutation={DELETE_TODO}
                onError={() => this.toggleErrorState(true)}
                update={(cache, { data: { deleteTask } }) => {
                    const { tasks } = cache.readQuery({
                        query: GET_TODOS
                    });

                    var updatedTasks = tasks.filter(task => {
                        return task._id !== deleteTask._id
                    });

                    cache.writeQuery({
                        query: GET_TODOS,
                        data: { tasks: updatedTasks }
                    });
                }}
            >
                {(deleteTask, { loading }) => (
                    <TaskWrapper
                        backgroundColor={theme.colorGrayLight}
                        hoverColor='white'
                        onClick={this.toggleCompletion}
                    >
                        {loading &&
                            <Spinner />
                        }

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

                        <DeleteButton handleClick={e => this.handleDeletion(e, deleteTask)}/>

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            autoHideDuration={5000}
                            message='Oops, there was an error deleting the task. Try again later'
                            onClose={() => this.toggleErrorState(false)}
                            open={this.state.isErrorShown}
                        />
                    </TaskWrapper>
                )}
            </Mutation>
        );
    }
}
