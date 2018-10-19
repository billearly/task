import { ITask } from '../../../../model';
import { Bridge } from '../../../../enum';

export const TASK_STANDARD: ITask = {
    id: 'abc123',
    title: 'Test the components',
    bridge: Bridge.SOTHAT,
    reason: 'I know that it works',
    isComplete: false,
    creationDate: new Date(2000, 1, 1),
    updateDate: new Date(2000, 1, 2),
    completionDate: new Date(2000, 1, 3)
}

export const TASK_REASON_EMPTY: ITask = {
    id: 'abc123',
    title: 'Test the components',
    bridge: Bridge.SOTHAT,
    reason: '',
    isComplete: false,
    creationDate: new Date(2000, 1, 1),
    updateDate: new Date(2000, 1, 2),
    completionDate: new Date(2000, 1, 3)
}

export const TASK_REASON_LEADING_WHITESPACE: ITask = {
    id: 'abc123',
    title: 'Test the components',
    bridge: Bridge.SOTHAT,
    reason: ' it works with leading whitespace',
    isComplete: false,
    creationDate: new Date(2000, 1, 1),
    updateDate: new Date(2000, 1, 2),
    completionDate: new Date(2000, 1, 3)
}
