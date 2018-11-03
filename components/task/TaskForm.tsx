import React, { Component } from 'react';
import { Mutation, MutationFn } from "react-apollo";
import { GET_TODOS, WRITE_TODO } from '../../gql';
import {
    Form,
    Input,
    Select,
    Button
} from '../form';

// So much cleanup
// - add styles

interface IState {
    title: string;
    bridge: string;
    reason: string;
}

export class TaskForm extends Component<{}, IState> {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            bridge: "BECAUSE",
            reason: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e): void {
        e.preventDefault();

        switch(e.target.name) {
            case 'title':
                this.setState({ title: e.target.value});
                break;

            case 'bridge':
                this.setState({ bridge: e.target.value});
                break;

            case 'reason':
                this.setState({ reason: e.target.value});
                break;
        }
    }

    handleSubmit(e, mutationFn: MutationFn): void {
        e.preventDefault();

        mutationFn({ 
            variables: { 
                title: this.state.title,
                bridge: this.state.bridge,
                reason: this.state.reason
            }
        });

        this.setState({
            title: "",
            reason: ""
        });
    }

    render(): JSX.Element {
        return (
            <Mutation
                mutation={WRITE_TODO}
                update={(cache, { data: { writeTask } }) => {
                    const { tasks } = cache.readQuery({ 
                        query: GET_TODOS
                    });

                    cache.writeQuery({
                        query: GET_TODOS,
                        data: { tasks: tasks.concat([writeTask]) }
                    });
                }}
            >
                {(writeTask, { data }) => (
                    <div>
                        <Form
                            onSubmit={e => { this.handleSubmit(e, writeTask) }}
                        >
                            <Input
                                name='title'
                                value={this.state.title}
                                placeholder='Title'
                                onChange={this.handleChange}
                            />

                            <Select
                                name='bridge'
                                value={this.state.bridge}
                                onChange={this.handleChange}
                            >
                                <option value="BECAUSE">Because</option>
                                <option value="SOTHAT">So that</option>
                            </Select>

                            <Input
                                name='reason'
                                value={this.state.reason}
                                placeholder='Reason'
                                onChange={this.handleChange}
                            />

                            <Button type='submit'>
                                Add Task
                            </Button>
                        </Form>
                    </div>
                )}
            </Mutation>
        );
    }
};