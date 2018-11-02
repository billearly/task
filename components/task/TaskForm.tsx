import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// So much cleanup
// - these queries need to go in a central place as they are referenced a few places
// - Task that comes back from the write needs to be converted to an ITask
// - dont use refs, proper state management
// - add styles

const writeTodo = gql`
    mutation writeTask($title: String, $bridge: String, $reason: String) {
        writeTask(title: $title, bridge: $bridge, reason: $reason) {
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

// These should be in a shared place since its a single schema
// this was copied from the TaskList component
const tasksQuery = gql`
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

export class TaskForm extends Component {
    title;
    bridge;
    reason;

    constructor(props) {
        super(props);

        this.title = React.createRef();
        this.bridge = React.createRef();
        this.reason = React.createRef();
    }

    render () {
        return (
            <Mutation
                mutation={writeTodo}
                update={(cache, { data: { writeTask } }) => {
                    // the task that comes back needs to be converted to an ITask

                    const { tasks } = cache.readQuery({ 
                        query: tasksQuery
                    });

                    cache.writeQuery({
                        query: tasksQuery,
                        data: { tasks: tasks.concat([writeTask]) }
                    });
                }}
            >
                {(writeTask, { data }) => (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();

                                // snag the values from form

                                // this is where I need some state management (mobx)
                                // the individual form controls update the store
                                // and on submit the values are taken from the store

                                writeTask({ 
                                    variables: { 
                                        title: this.title.current.value,
                                        bridge: this.bridge.current.value,
                                        reason: this.reason.current.value
                                    }
                                });
                            }}
                        >
                            <label>Title</label>
                            <input
                                ref={this.title}
                            />

                            <select
                                ref={this.bridge}
                            >
                                <option value="BECAUSE">Because</option>
                                <option value="SOTHAT">So that</option>
                            </select>

                            <label>Reason</label>
                            <input
                                ref={this.reason}
                            />

                            <button type="submit">Write Task</button>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    }
};