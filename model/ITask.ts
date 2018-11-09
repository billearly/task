import { Bridge } from '../enum';

export interface ITask {
    _id: string;
    title: string;
    bridge: Bridge;
    reason: string;
    isComplete: boolean;
    creationDate: Date;
    updateDate: Date;
    completionDate: Date;
}
