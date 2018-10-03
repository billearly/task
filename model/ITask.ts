export interface ITask {
    id: string;
    title: string;
    reason: string;
    isComplete: boolean;
    creationDate: Date;
    updateDate: Date;
    completionDate: Date;
}