import { Bridge } from '../enum';

export interface ITask {
    id: string;
    title: string;
    bridge: Bridge;
    reason: string;
    isComplete: boolean;
    creationDate: Date;
    updateDate: Date;
    completionDate: Date;
}
